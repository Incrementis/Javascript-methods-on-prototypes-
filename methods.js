/*
==================================================================================
	NOTE:
	
	The use of global variables is not recommended, due to higher risk of errors.
	
	The code below serves only demonstration purposes.
==================================================================================
*/

//Will contain Instances of HealthyGenes or Cancer
var healthyGenes 	= [];
var unhealthyGenes 	= [];


//=======================
//Class HealthyGenes
//=======================
function HealthyGenes(){};

//Generates prototype methods of HealthyGenes
for(var method = 0; method < 100; method++)
{

	HealthyGenes.prototype["GROWTH" + method] = function()
	{
		var growth_InPercent = method
		
		return growth_InPercent;
	};
}


//=======================
//Class Cancer
//=======================
function Cancer()
{
		//Generates methods within Cancer
		for(var method = 0; method < 100; method++)
		{
		
			this[method] = function()
			{
				var growth_InPercent = method
				
				return growth_InPercent;
			};
		}
};


//=======================
//Inputs
//=======================

//Generates dynamic numbers of Cancer or HealthyGenes instances
function numOfGrowth()
{
	//Converting to type number with the "+" operator
	var genes 		= +document.getElementById('num-of-growth').value;
	var healthy 	= document.getElementById('healthy-growth');
	var unhealthy 	= document.getElementById('unhealthy-growth');
	
	
	
	//Resete genes if number of growth(user input) is reduced
	if(healthy.checked && (genes < healthyGenes.length))
	{
		healthyGenes 	= [];
		
	}
	else if(unhealthy.checked && (genes < unhealthyGenes.length))
	{
		unhealthyGenes 	= [];
		
	}
	
	
	//Generating HealthyGenes instances
	for(var gene = 0; gene < genes; gene++)
	{	
		
		
		if(healthy.checked)
		{
			
			healthyGenes[gene] 		= new HealthyGenes();
			
		}
		else if(unhealthy.checked)
		{
			
			unhealthyGenes[gene] 	= new Cancer();
			
		}		
		else
		{
			alert("ERROR: Type of Growth doesn`t exist! Please check code...");
		}
		
	}		
	
}


//Reloades page (releasing memory)
function refresh()
{
	location.reload();
}


//Change picture depending on the selected radio buttons
var loadImage = function()
{
	var healthy 	= document.getElementById('healthy-growth');
	var unhealthy 	= document.getElementById('unhealthy-growth');
	var image		= document.getElementById('genetic-pic');
	
	
	if(unhealthy.checked)
	{
		image.src = "Cancer.jpg";
	}
	else if(healthy.checked)
	{
		image.src = "Healthy.jpg";
	}
	else
	{
		alert("WARNING: Missing image!");
	}
	
};

//Initializing image when page is loaded the first time
loadImage();