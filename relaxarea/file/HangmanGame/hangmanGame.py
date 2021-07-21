## HANGMAN GAME, design specifications from
# https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/assignments/index.htm 
# problem set 2 solution
# Created on May 2021
# -----------------------------------
import random
import string

WORDLIST_FILENAME = "words.txt"


def load_words():
    print("Loading word list from file...")
    inFile = open(WORDLIST_FILENAME, 'r')
    line = inFile.readline()
    wordlist = line.split()
    print(len(wordlist), "words loaded.")
    return wordlist

def choose_word(wordlist):
    return random.choice(wordlist)

# LOGICA +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
def is_word_guessed(secret_word, letters_guessed):
    # trasformo le stringhe in liste, in modo che siano gestibili
    secret_word_tolist = list(secret_word)
    correct_letters = [char for char in letters_guessed if char in secret_word_tolist]
    # trasformo le liste in set, in modo che siano perfettamente comparabili
    secret_word_toset = set(secret_word)
    correct_letters_toset = set(correct_letters)
    if secret_word_toset == correct_letters_toset:
      return True
    else:
      return False

def get_guessed_word(secret_word, letters_guessed):
    # trasformo le stringhe in liste, in modo che siano gestibili
    secret_word_tolist = list(secret_word)
    correct_letters = [char for char in letters_guessed if char in secret_word_tolist]
    # creo una funzione anonima per passarla al metodo built-in che mapperà la parola segreta, 
    # mascherando le lettere non ancora trovate dall'utente, come decritto nella lambda function
    check = lambda char : char if char in correct_letters else "_" 
    secret_word_map = map(check, secret_word)
    # trasformo l'oggetto secret_word_map in una stringa leggibile prima di restituirla
    mapToStr = ' '.join(map(str, secret_word_map)) 
    return mapToStr, correct_letters

def get_available_letters(letters_guessed):
    available_chars = list(string.ascii_lowercase)
    # creo una funzione anonima per passarla al metodo built-in che filtrerà le lettere già usate
    letters_used = lambda char : True if char not in letters_guessed else False
    letters_left = filter(letters_used, available_chars)
    # trasformo l'oggetto letters_left in una stringa leggibile prima di restituirla
    filterToStr = ' '.join(map(str, letters_left))
    return filterToStr

def check_user_input(guess_counter, warn):
  char_guess = input("Please guess a letter: ")
  hint_request = False
  if char_guess == "*":
    hint_request = True
  else:
    while (char_guess.isalpha() == False or len(char_guess) != 1) and guess_counter > 0: 
      if warn > 0:
        warn = warn - 1
        print(f"Oops! That is not a valid letter. You lose a warning and now you have {warn} warnings left")
      elif guess_counter > 0:
        guess_counter = guess_counter - 1
        print(f"Oops! That is not a valid letter. You have no remaining warnings. You lose a guess and now you have {guess_counter} left")

      char_guess = input("Please enter only one letter: ")

  # se l'input passa i controlli, lo converto in forma minuscola
  char_checked = char_guess.lower()

  return char_checked, guess_counter, warn, hint_request

def check_repeated_letter(letters_left, char_checked, warn, guess_counter):
  isrepeated = False
  if not set(letters_left).intersection(char_checked):
    isrepeated = True
    if warn > 0:
      warn = warn - 1
      print(f"Oops! You've already guessed that letter. You lose a warning and now you have {warn} warnings")
    elif guess_counter > 0:
      guess_counter = guess_counter - 1
      print(f"Oops! You've already guessed that letter. You have no remaining warnings. You lose a guess and now you have {guess_counter} guesses left")
  
  return isrepeated, warn, guess_counter

    
def show_possible_matches(my_word, wordlist):
    # Alla funzione filter dovrò passare sia other_word, sia la funzione di match, che
    # la prende in entrata e che restituisce, di volta in volta, un valore booleano, che sarà usato
    # dalla funzione filter, insieme all'iterabile wordlist, per filtare solo le parole compatibili.

    # In altre parole, ho la necessità di passare due valori alla funzione filter, prima dell'iterabile.
    # Perché? Per ogni parola nel vocabolario, devo eseguire la funzione di match, che prende in 
    # ingresso una parola per volta (other_word, che arriva dalla lambda) e controlla se ci 
    # sia o meno il match con la mappa della parola che sta costruendo l'utente in quel momento. 
    # Il risultato della funzione di match deve entrare per ogni parola della lista, quindi tante 
    # volte quante sono le parole della wordlist.
    # Solo a questo punto il metodo filter avrà a disposizione tutti i dati per fare il suo lavoro,
    # cioè una lista di booleani pari al numero di parole contenute nella wordlist che usa come  
    # iterabile per filtrare solo le parole compatibili.
    # In una sola riga il codice sarà:
    compatible_words_filter = filter(lambda other_word: match_with_gaps(other_word, my_word), wordlist)
    compatible_words = ', '.join(map(str, compatible_words_filter))
    return compatible_words

def match_with_gaps(other_word, my_word):
    other_word_tolist = list(other_word)
    my_word_tolist = list(my_word)
    # Premessa: ho due liste di stringhe da confrontare.
    # Una delle due liste potrebbe contenere sia underscore sia lettere.
    # Occorre conoscere separatamente la posizione degli uni (underscore) e delle altre (lettere).
    # Occorre, quindi, confrontarne il contenuto per ogni posizione delle due liste (my_word_tolist,
    # other_word_tolist) sia per gli underscore che per le lettere.
    # Infine occorre farsi restituire un valore booleano dall'intercettazione di discrepanze.

    if (len(other_word_tolist)) == (len(my_word_tolist)):
      # nel caso in cui la lunghezza delle liste sia la stessa:
      # step 1 - riconosco le lettere nella prima lista (my_word_tolist) e ne ricavo le posizioni
      position_list = [char for char, value in enumerate(my_word_tolist) if value != "_"]
      # step 2 - confonto il contenuto delle due liste per le posizioni delle lettere (position_list)
      # e mi faccio restituire False se il contenuto è diverso; altrimenti avrò una lista vuota.
      comparison_list = [False for pos in position_list if my_word_tolist[pos] != other_word[pos]]
      # TEST - print(position_list, comparison_list)
      # applico la stessa logica per gli underscore:
      # step 0 - creo la letters_list con le lettere presenti nella prima lista (my_word_tolist)
      # Mi servirà per assicurarmi di non intercettare una di queste lettere tra i caratteri nascosti.
      letters_list = [char for char in my_word_tolist if char != "_"]
      # step 1 - riconosco gli underscore nella prima lista (my_word_tolist) e ne ricavo le posizioni
      hidden_position_list = [char for char, value in enumerate(my_word_tolist) if value == "_"]
      # step 2 - confonto il contenuto delle due liste per le posizioni degli underscore (hidden_position_list)
      # e mi faccio restituire True se il contenuto della seconda lista (other_words_tolist) intercetta una delle
      # lettere già presenti nella seconda lista (my_word_tolist); altrimenti avrò una lista vuota.
      hidden_comparison_list = [True for pos in hidden_position_list if set(letters_list).intersection(other_word[pos])]
      # TEST - print(letters_list, hidden_position_list, hidden_comparison_list)

      # Se entrambe le liste di comparazione sono vuote significa che non sono state trovate incongruenze
      if (not comparison_list) and (not hidden_comparison_list):
        return True
      return False
  

def hangman(secret_word, bad_guess, letters_guessed, win, guess_counter, warn, is_letter):
  # Main - compongo assieme i singoli pezzi costruiti precedentemente secondo le specifiche fornite
  print(f"-----\nYou have 3 warnings left.\nYou have 6 guesses left.\nAvailable letters: {' '.join(string.ascii_lowercase)}")
  while guess_counter > 0 and win != True:
      char_checked, guess_counter, warn, hint_request = check_user_input(guess_counter, warn)
      letters_left = get_available_letters(letters_guessed)
      my_word = bad_guess.replace(" ", "")
      
      if hint_request and is_letter:
        compatible_words = show_possible_matches(my_word, wordlist)
        if not compatible_words:
          print("No matches found") 
        print(compatible_words)
      elif hint_request and is_letter == False:
          print(f"You can ask for hints if you have already guessed at least one letter of the secret word. Try later")
      else:
        isrepeated, warn, guess_counter = check_repeated_letter(letters_left, char_checked, warn, guess_counter)
        letters_guessed.append(char_checked)
        secret_word_map, correct_letters = get_guessed_word(secret_word, letters_guessed)
        if char_checked in correct_letters and isrepeated == False: 
          print(f"Good guess: {secret_word_map}")
          bad_guess = secret_word_map
        elif char_checked not in correct_letters and isrepeated == False: 
          print(f"Oops! That letter is not in my word: {bad_guess}")
          lastel = letters_guessed[len(letters_guessed) - 1]
          if set('aeiou').intersection(lastel):
            guess_counter = guess_counter - 2
            print(f"You lose two guesses and now you have {guess_counter} guesses left")
          else:
            guess_counter = guess_counter - 1
            print(f"You lose a guess and now you have {guess_counter} guesses left")
      # controlla se l'utente ha già indovinato almeno una lettera, per impedire che possa chiedere
      # suggerimenti quando la funzione non ha ancora dati per filtrare le parole compatibili
      is_letter = any(char.isalpha() for char in bad_guess)
      print(f"-----\nYou have {warn} warnings left.\nYou have {guess_counter} guesses left.\nAvailable letters: {letters_left}")  
      win = is_word_guessed(secret_word, letters_guessed)
        
  return guess_counter, win, bad_guess, warn, is_letter
        
      

# INIZIALIZZAZIONE +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
guess_counter = 6
warn = 3
win = False
is_letter = False
letters_guessed = []
wordlist = load_words()
secret_word = choose_word(wordlist)
# secret_word = random.choice(open("words.txt").readline().split())
wordlen = len(secret_word)
bad_guess = "_ " * wordlen

# AVVIO +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
# print(f"  TEST - secret_word: {secret_word}")
print(f"Welcome to the game Hangman!\nI am thinking of a word that is {wordlen} letters long.")
guess_counter, win, bad_guess, warn, is_letter = hangman(secret_word, bad_guess, letters_guessed, win, guess_counter, warn, is_letter)
if win:
  print("Great job! You won")
else:
  print("You have no remaining guesses. Game over")