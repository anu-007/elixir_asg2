var box=document.getElementById('display');
function addtoscreen(x)
{
	box.value+=x;
	if(x=='c')
	{
		box.value=' ';
	}
}
function result()
{
	x=box.value;
	x=eval(x);
	box.value=x;
}