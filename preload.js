var scratchFont1, scratchFont2, scratchFont3

function preload(){
	try {
		scratchFont1 = loadFont("https://jakewheaton.github.io/Concept-Challenges/Fonts/Mouse_Memoirs/MouseMemoirs-Regular.ttf");
		scratchFont2 = loadFont("https://jakewheaton.github.io/Concept-Challenges/Fonts/Indie_Flower/IndieFlower-Regular.ttf");
		scratchFont3 = loadFont("https://jakewheaton.github.io/Concept-Challenges/Fonts/Mochiy_Pop_One/MochiyPopOne-Regular.ttf")
	}
	catch(err) {
		scratchFont1 = 'Courier New';
		scratchFont2 = 'Courier New';
		scratchFont3 = 'Courier New';
	}
}