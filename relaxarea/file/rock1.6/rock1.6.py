## ROCK PAPER SCISSORS LIZARD SPOCK
# Created on April 2021

import random

frame01 = "                           /\___/\.\n"
frame02 = "                          ( =^__^=)\n"
frame03 = "<------------------------oo-------oo------------------------>\n"
frame04 = "<--------------------------**---**-------------------------->\n"
frame05 = "****************************************************************************\n"
frame06 = "\n****************************************************************************"

# MAPPATURA RISULTATI UTENTE +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
points = [
    [0,0,1,1,0],
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,1,0,0,1],
    [1,0,1,0,0]
]

comments = [
    ["  It's a tie.","  Paper covers rock. You lose.","  Rock crushes scissors. You win!","  Rock crushes lizard. You win!","  Spock vaporizes rock. You lose."],
    ["  Paper covers rock. You win!","  It's a tie.","  Scissors cuts paper. You lose.","  Lizard eats paper. You lose.","  Paper dispoves Spock. You win!"],
    ["  Rock crusches scissors. You lose.","  Scissors cuts paper. You win!","  It's a tie.","  Scissors decapitates Lizard. You win!","  Spock smashes scissors. You lose."],
    ["  Rock crushes Lizard. You lose.","  Lizard eats paper. You win!","  Scissors decapitates Lizard. You lose.","  It's a tie.","  Lizard poisons Spock. You win!"],
    ["  Spock vaporizes rock. You win!","  Paper diproves Spock. You lose.","  Spock smashes scissors. You win!","  Lizard poisons Spock. You lose.","  It's a tie."]
]

# FUNZIONI DI APPOGGIO +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

# restituisco i punti vittoria necessari considerando il peso di eventuali pareggi
def match_rules(draw_counter):
    selector = {
        0: 3,
        1: 3,
        2: 2,
        3: 2,
        4: 1
    }
    points_to_win = selector.get(draw_counter, "It's a tie. ")
    return points_to_win

# restituisco le chiavi per accedere alla liste
def find_pos(user_choice, opponent_choice):
    switcher = {
        "rock": 0,
        "paper": 1,
        "scissors": 2,
        "lizard": 3,
        "Spock": 4
    }
    user_key = switcher.get(user_choice, "Invalid choice")

    # controllo la validità dell'input utente
    if (user_key == "Invalid choice"):
        wrong_turn = 1
        user_key = 0
        opponent_key = 0
    else:
        opponent_key = switcher.get(opponent_choice, "Error")
        wrong_turn = 0
    return user_key, opponent_key, wrong_turn


# LOGICA DEL GIOCO +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
def single_game(draw_counter):
    mylist = ["rock", "paper", "scissors", "lizard", "Spock"]
    opponent_choice = random.choice(mylist)
    user_choice = input("Please enter one of the following words: rock, paper, scissors, lizard, Spock: ")
    if (user_choice == "spock"):
        user_choice = user_choice.capitalize()
        # mi faccio restituire le chiavi
    user_key, opponent_key, wrong_turn = find_pos(user_choice, opponent_choice)
        # accedo alla mappa dei punti e assegno il punteggio corrente dell'utente
    game_score = points[user_key][opponent_key]
    message = comments[user_key][opponent_key]
        # controllo se il punteggio corrente sia o meno un pareggio
    if (user_key == opponent_key) and (wrong_turn == 0):
        draw_counter += 1
    return user_choice, opponent_choice, game_score, message, draw_counter, wrong_turn


def full_set(draw_counter, total_scores):
    turn_to_play = 0
    while turn_to_play < 5:
        user_choice, opponent_choice, game_score, message, draw_counter, wrong_turn = single_game(draw_counter)
        # controllo la validità del turno di gioco
        if (wrong_turn == 1):
            print(f"{frame05}**  Invalid choice. This round will not be counted. {frame06}")
        else:
            print(frame01 + frame02 + frame03)
            print(f"  Your move is {user_choice}. The opponent's move is {opponent_choice}.\n{message}")
            total_scores += game_score
            print(f"  Now, your score is {total_scores}.")
            print(frame04)
        # consumo lo stack solo se l'utente ha inserito un input valido
        turn_to_play = turn_to_play + 1 - wrong_turn
    return total_scores, draw_counter


def final_match(total_scores, draw_counter):
    points_to_win = match_rules(draw_counter)
    if (points_to_win != "It's a tie. ") and (total_scores >= points_to_win):
        print(f"{frame05}**  Great! You won{frame06}")
    elif (points_to_win != "It's a tie. ") and (total_scores < points_to_win):
        print(f"{frame05}**  That's too bad, you lost{frame06}")
    else:
        print(f"{frame05}**  {points_to_win}Good game!{frame06}")


# INIZIALIZZAZIONE +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
draw_counter = 0
total_scores = 0

# AVVIO +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
total_scores, draw_counter = full_set(draw_counter, total_scores)
final_match(total_scores, draw_counter)
