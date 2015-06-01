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
     
function OnTriggerEnter (other : Collider){
	
	 //lineRenderer.enabled = true;
     GetComponent(TextMesh).text = "Ala";
     
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

function OnTriggerExit (other : Collider){

    GetComponent(TextMesh).text = "";
    //lineRenderer.enabled = false;
	Debug.LogWarning("Fuori");
	
}

