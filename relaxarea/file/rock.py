#RockPaperScissorsLizardSpock
import random

mylist = ["rock", "paper", "scissors", "lizard", "Spock"]

your_scores, opponent_scores = 0, 0

welcome = input("Enter your name: ")
print(f"Hello {welcome.capitalize()}, do you want to play?")
answer = input("Insert Y or N: ")

case_rock = {"rock" : "  Same choice. The scores remains unchanged",
             "paper" : "  Paper covers rock. You win!",
             "scissors" : "  Rock crushes scissors. You lose",
             "lizard" : "  Rock crushes lizard. You lose",
             "Spock" : "  Spock vapourises rock. You win!"}

case_paper = {"rock" : "  Paper covers rock. You lose",
              "paper" : "  Same choice. The score remains unchanged",
              "scissors" : "  Scissors cuts paper. You win!",
              "lizard" : "  Lizard eats paper. You win!",
              "Spock" : "  Paper dispoves Spock. You lose"}
        
case_scissors = {"rock" : "  Rock crusches scissors. You win!",
                 "paper" : "  Scissors cuts paper. You lose",
                 "scissors" : "  Same choice. The score remains unchanged",
                 "lizard" : "  Scissors decapitates Lizard. You lose",
                 "Spock" : "  Spock smashes scissors. You win!"}
        
case_lizard = {"rock" : "  Rock crushes Lizard. You win!",
               "paper" : "  Lizard eats paper. You lose",
               "scissors" : "  Scissors decapitates Lizard. You win!",
               "lizard" : "  Same choice. The score remains unchanged",
               "Spock" : "  Lizard poisons Spock. You lose"}
        
case_spock = {"rock" : "  Spock vapourises rock. You lose",
              "paper" : "  Paper diproves Spock. You win!",
              "scissors" : "  Spock smashes scissors. You lose",
              "lizard" : "  Lizard poisons Spock. You win!",
              "Spock" : "  Same choice. The score remains unchanged"}


def game():
    '''One popular five-weapon expansion is "rock paper scissors Spock lizard", 
    invented by Sam Kass and Karen Bryla, which adds "Spock" and "lizard" to 
    the standard three choices. 
    This variant was mentioned in a 2005 article in The Times of London and was 
    later the subject of an episode of the American sitcom The Big Bang Theory 
    in 2008 (as rock-paper-scissors-lizard-Spock). Fonte: wikipedia'''
    
    frame01 = "                           /\___/\."
    frame02 = "                          ( =^__^=)"
    frame03 = "<------------------------oo-------oo------------------------>"
    br = "\n"
    
    global your_scores
    global opponent_scores
    opponent_choice = random.choice(mylist)
    user_choice = input("Please enter one of the following words: rock, paper, scissors, lizard, Spock: ")
    print(br + frame01 + br + frame02 + br + frame03)
    print(f"  Your move is {user_choice}. The opponent's move is {opponent_choice}")
    
    if opponent_choice == "rock":
        res_rock = case_rock.get(user_choice, "  Invalid choice")
        print(res_rock)
        if res_rock == "  Same choice. The score remains unchanged":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores + 0
        elif res_rock == "  Paper covers rock. You win!":
            your_scores = your_scores + 1
            opponent_scores = opponent_scores + 0
        elif res_rock == "  Rock crushes scissors. You lose":
            your_scores =  your_scores + 0
            opponent_scores =  opponent_scores + 1
        elif res_rock == "  Rock crushes lizard. You lose":
            your_scores =  your_scores + 0
            opponent_scores =  opponent_scores + 1
        elif res_rock == "  Spock vapourises rock. You win!":
            your_scores =  your_scores + 1
            opponent_scores =  opponent_scores + 0
        else:
            print("  No points. The score remains unchanged")
                
    elif opponent_choice == "paper":
        res_paper = case_paper.get(user_choice, "  Invalid choice")
        print(res_paper)
        if res_paper == "  Paper covers rock. You lose":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores + 1
        elif res_paper == "  Same choice. The score remains unchanged":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores + 0
        elif res_paper == "  Scissors cuts paper. You win!":
            your_scores = your_scores + 1
            opponent_scores = opponent_scores + 0
        elif res_paper == "  Lizard eats paper. You win!":
            your_scores = your_scores + 1
            opponent_scores = opponent_scores + 0
        elif res_paper == "  Paper dispoves Spock. You lose":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores + 1 
        else:
            print("  No points. The score remains unchanged")
        
    elif opponent_choice == "scissors":
        res_scissors = case_scissors.get(user_choice, "  Invalid choice")
        print(res_scissors)
        if res_scissors == "  Rock crusches scissors. You win!":
            your_scores = your_scores + 1
            opponent_scores = opponent_scores + 0 
        elif res_scissors == "  Scissors cuts paper. You lose":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores + 1
        elif res_scissors == "  Same choice. The score remains unchanged":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores + 0
        elif res_scissors == "  Scissors decapitates Lizard. You lose":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores + 1
        elif res_scissors == "  Spock smashes scissors. You win!":
            your_scores = your_scores + 1
            opponent_scores = opponent_scores + 0
        else:
            print("  No points. The score remains unchanged")
        
    elif opponent_choice == "lizard":
        res_lizard = case_lizard.get(user_choice, "  Invalid choice")
        print(res_lizard)   
        if res_lizard == "  Rock crushes Lizard. You win!":
            your_scores = your_scores+1
            opponent_scores = opponent_scores + 0
        elif res_lizard == "  Lizard eats paper. You lose":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores+1
        elif res_lizard == "  Scissors decapitates Lizard. You win!":
            your_scores = your_scores+1
            opponent_scores = opponent_scores + 0
        elif res_lizard == "  Same choice. The score remains unchanged":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores + 0
        elif res_lizard == "  Lizard poisons Spock. You lose":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores +1
        else:
            print("  No points. The score remains unchanged")
            
    elif opponent_choice == "Spock":
        res_spock = case_spock.get(user_choice, "  Invalid choice")
        print(res_spock)
        if res_spock == "  Spock vapourises rock. You lose":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores + 1
        elif res_spock == "  Paper diproves Spock. You win!":
            your_scores = your_scores + 1
            opponent_scores = opponent_scores + 0
        elif res_spock == "  Spock smashes scissors. You lose":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores + 1
        elif res_spock == "  Lizard poisons Spock. You win!":
            your_scores = your_scores + 1
            opponent_scores = opponent_scores + 0
        elif res_spock == "  Same choice. The score remains unchanged":
            your_scores = your_scores + 0
            opponent_scores = opponent_scores + 0
        else:
            print("  No points. The score remains unchanged")
        
    else:
        print("Error. Chooce your move and play again")
    
    return your_scores, opponent_scores

        
if answer == "Y":
    print("Let's play!")
    turn_to_play = 0
    
    frame04 = "<--------------------------**---**-------------------------->\n"
    frame05 = "****************************************************************************"
    
    while turn_to_play < 5:
        game()
        ys = your_scores
        os = opponent_scores
        print(f"  Now, your score is {ys} and the opponent's score is {os}")
        print(frame04)
        turn_to_play += 1
        
    
    
    print(frame05)
    print(f"**  The game is over. Your score is {ys} and the opponent's score is {os}")    
    if ys > os:
        print("**  Great! You won")
        print(frame05)
    elif ys < os:
        print("**  That's too bad, you lost")
        print(frame05)
    elif ys == os:
        print("**  It's a tie. Good game!")
        print(frame05)
    else:
        ("Error. Try again, please")
    
             
elif answer == "N":
    print("See you later")

elif answer != "N" and answer != "Y":
    print("Invalid answer")

else:
    print("Error")


    
