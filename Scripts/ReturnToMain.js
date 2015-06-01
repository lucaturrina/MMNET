#pragma strict

function Start () {
	
}

function Update () //Return to Main Menu when ESC button is pressed
{

	if(Input.GetKeyDown(KeyCode.Escape))
		{
			Application.LoadLevel("1_MainMenu");
		}
}
