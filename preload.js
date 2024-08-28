var scratchFont1, scratchFont2, scratchFont3

function preload(){
	try {
		scratchFont1 = loadFont("https://github.com/jakeWheaton/Concept-Challenges/tree/main/Fonts/Mouse_Memoirs/MouseMemoirs-Regular.ttf");
		scratchFont2 = loadFont("https://github.com/jakeWheaton/Concept-Challenges/tree/main/Fonts/Indie_Flower/IndieFlower-Regular.ttf");
		scratchFont3 = loadFont("https://github.com/jakeWheaton/Concept-Challenges/tree/main/Fonts/Mochiy_Pop_One/MochiyPopOne-Regular.ttf")
	}
	catch(err) {
		scratchFont1 = 'Courier New';
		scratchFont2 = 'Courier New';
		scratchFont3 = 'Courier New';
	}
}