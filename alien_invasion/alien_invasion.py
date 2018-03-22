import sys
import pygame
from settings import Settings
from ship import Ship
from game_functions import *

def FXM_run_game():
	pygame.init()
	ai_settings = Settings()
	screen = pygame.display.set_mode((ai_settings.screen_width,ai_settings.screen_height))

	pygame.display.set_caption("Alien_Invasion")

	ship = Ship(screen)

	while True:
		check_events(ship)
		ship.update()
		update_screen(ai_settings, screen, ship)
		pygame.display.flip()


FXM_run_game()
