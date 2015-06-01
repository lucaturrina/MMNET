#pragma strict

function Start () {
		
}

function Update () {
      
}
     
function OnTriggerEnter (other : Collider){
	
      //gameObject.SetActive(false);
      GetComponent(TextMesh).text = "Pasubio [2239 m]";
      Debug.LogWarning("Dentro");
	
}

function OnTriggerExit (other : Collider){

	//gameObject.SetActive(true);
	GetComponent(TextMesh).text = "";
	Debug.LogWarning("Fuori");
	
}

