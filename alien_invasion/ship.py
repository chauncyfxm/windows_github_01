import pygame

class Ship():

	def __init__(self,screen):

		self.screen = screen

		self.image = pygame.image.load("./images/ship.png")
		self.rect = self.image.get_rect()
		self.screen_rect = screen.get_rect()


		self.rect.centerx = self.screen_rect.centerx
		self.rect.bottom = self.screen_rect.bottom


		self.moving_right = False
		self.moving_up = False
		self.moving_left = False
		self.moving_down = False



	def blitme(self):

		self.screen.blit(self.image, (self.rect.x, self.rect.y))

	
	def update(self):

		if self.moving_right:
			self.rect.centerx += self.ship_speed_factor
		if self.moving_left:
			self.rect.centerx -= self.ship_speed_factor
		if self.moving_up:
			self.rect.centery -= self.ship_speed_factor
		if self.moving_down:
			self.rect.centery += self.ship_speed_factor


		if self.rect.x <= 0:
			self.rect.x = 0
		if self.rect.right >= self.screen_rect.right:
			self.rect.right = self.screen_rect.right

		if self.rect.y <= 0:
			self.rect.y = 0
		if self.rect.bottom >= self.screen_rect.bottom:
			self.rect.bottom = self.screen_rect.bottom


