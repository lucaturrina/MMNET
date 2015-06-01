#pragma strict

function Start ()
{

}

function Update ()
{

}

function StartNav100 () //permits the user to enter in the Navigation100K scene
{
	Application.LoadLevel("2_Navigation100K"); 
}

function StartNav50 () //permits the user to enter in the Navigation50K scene
{
	Application.LoadLevel("3_Navigation50K");
}

function ExitGame () //permits the user to exit from the application
{
	Application.Quit(); 
}