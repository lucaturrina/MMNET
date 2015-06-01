#pragma strict

/*var lengthOfLineRenderer : int = 20;
var c1 : Color = Color(1,1,1,1);
public var lineRenderer : LineRenderer = gameObject.AddComponent.<LineRenderer>();
*/
function Start () {
	//lineRenderer.enabled = false;  
}

function Update () {
	
}
     
function OnTriggerEnter (other : Collider) //Generates a Text Mesh component with Trento as text field when the player enters in the box collider
{
	
	 //lineRenderer.enabled = true;
     GetComponent(TextMesh).text = "Trento";
     
	 /*lineRenderer.SetColors(c1,c1);
	 lineRenderer.material = new Material (Shader.Find("Reflective/Specular"));
	 
	 lineRenderer.SetWidth(0.2,0.2);
	 lineRenderer.SetVertexCount(lengthOfLineRenderer);
	 
	 lineRenderer.SetVertexCount(lengthOfLineRenderer);
	 
	 for(var i : int = 0; i < lengthOfLineRenderer; i++) {
		var pos : Vector3 = Vector3(transform.position.x,transform.position.y-i-2,transform.position.z);
		lineRenderer.SetPosition(i, pos);
   	 }*/

}

function OnTriggerExit (other : Collider) //Generates a Text Mesh component with empty text field when the player exit from the box collider
{

    GetComponent(TextMesh).text = "";
    //lineRenderer.enabled = false;
	Debug.LogWarning("Fuori");
	
}
