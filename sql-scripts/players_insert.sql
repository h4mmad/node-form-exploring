INSERT INTO PLAYERS(PLAYER_NAME, PLAYER_DOB, PLAYER_NATIONALITY, PLAYER_PIC_URL, PLAYER_FLAG_URL)
VALUES('Edouard Mendy', '1992-03-01', 'Senegal', "https://chelsea-squad.netlify.app/images/mendy.png", "https://chelsea-squad.netlify.app/images/flags/senegal.png");


INSERT INTO PLAYERS(PLAYER_NAME, PLAYER_DOB, PLAYER_NATIONALITY, PLAYER_PIC_URL, PLAYER_FLAG_URL)
VALUES('Antonio Rudiger', '1993-03-03', 'Germany', "https://chelsea-squad.netlify.app/images/rudiger.png", "https://chelsea-squad.netlify.app/images/flags/germany.png");

INSERT INTO PLAYERS(PLAYER_NAME, PLAYER_DOB, PLAYER_NATIONALITY, PLAYER_PIC_URL, PLAYER_FLAG_URL, PLAYER_HEIGHT)
VALUES('Jorginho', '1991-12-20', 'Italy', "https://chelsea-squad.netlify.app/images/jorginho.png", "https://chelsea-squad.netlify.app/images/flags/italy.png", 1.8);



update players
set player_height = 1.98
where player_id = 1;

delete from players
where player_id IN (6,7);


select * from players;