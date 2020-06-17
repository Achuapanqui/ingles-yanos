window.addEvent("domready", function(e){

$("1").addEvent("click", function(){
  var SM = new SimpleModal({"btn_ok":"-->"});
      SM.show({
        "title":"Calificación",
        "contents":cambiarfondo()
      });
});

});

function quiz1()
{
	var correctas=0;
	var incorrectas=0;
	
	var pregunta1=document.mue1.muebles1.value;
	
	if(pregunta1=="C")
	{
        correctas++;
	}
	else
	{
        incorrectas++;
    }
    
    var pregunta2=document.mue2.muebles2.value;
	
	if(pregunta2=="C")
	{
        correctas++;
	}
	else
	{
        incorrectas++;
    }
    
     
    var pregunta3=document.mue3.muebles3.value;
	
	if(pregunta3=="B")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }

	 var pregunta4=document.mue4.muebles4.value;
	
	if(pregunta4=="C")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta5=document.mue5.muebles5.value;
	
	if(pregunta5=="A")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta6=document.mue6.muebles6.value;
	
	if(pregunta6=="D")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta7=document.mue7.muebles7.value;
	
	if(pregunta7=="D")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta8=document.mue8.muebles8.value;
	
	if(pregunta8=="C")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta9=document.mue9.muebles9.value;
	
	if(pregunta9=="D")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	document.getElementById("correctas").textContent = "Respuestas Correctas: "+ correctas;
	document.getElementById("incorrectas").textContent = "Respuestas Incorrectas: " + incorrectas;
	document.getElementById("total").textContent = "TOTAL: " + correctas + "/9";
}

function quiz2()
{
	var correctas=0;
	var incorrectas=0;
	
	var pregunta1=document.par1.partes1.value;
	
	if(pregunta1=="B")
	{
        correctas++;
	}
	else
	{
        incorrectas++;
    }
    
    var pregunta2=document.par2.partes2.value;
	
	if(pregunta2=="B")
	{
        correctas++;
	}
	else
	{
        incorrectas++;
    }
    
     
    var pregunta3=document.par3.partes3.value;
	
	if(pregunta3=="A")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }

	 var pregunta4=document.par4.partes4.value;
	
	if(pregunta4=="A")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta5=document.par5.partes5.value;
	
	if(pregunta5=="A")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta6=document.par6.partes6.value;
	
	if(pregunta6=="B")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta7=document.par7.partes7.value;
	
	if(pregunta7=="B")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta8=document.par8.partes8.value;
	
	if(pregunta8=="A")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta9=document.par9.partes9.value;
	
	if(pregunta9=="A")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	var pregunta10=document.par10.partes10.value;
	
	if(pregunta10=="A")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	document.getElementById("correctas").textContent = "Respuestas Correctas: "+ correctas;
	document.getElementById("incorrectas").textContent = "Respuestas Incorrectas: " + incorrectas;
	document.getElementById("total").textContent = "TOTAL: " + correctas + "/10";
}

function quiz3()
{
	var correctas=0;
	var incorrectas=0;
	
	var pregunta1=document.getElementById("p1").value;
	
	if(pregunta1=="Pants" || pregunta1=="pants")
	{
        correctas++;
	}
	else
	{
        incorrectas++;
    }
    
    var pregunta2=document.getElementById("p2").value;
	
	if(pregunta2=="jacket" || pregunta2=="Jacket")
	{
        correctas++;
	}
	else
	{
        incorrectas++;
    }
    
     
    var pregunta3=document.getElementById("p3").value;
	
	if(pregunta3=="shorts" || pregunta3=="Shorts")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }

	 var pregunta4=document.getElementById("p4").value;
	
	if(pregunta4=="hat" || pregunta4=="Hat")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta5=document.getElementById("p5").value;
	
	if(pregunta5=="T-Shirt" || pregunta5=="t-shirt" || pregunta5=="T-shirt" || pregunta5=="t-Shirt")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	document.getElementById("correctas").textContent = "Respuestas Correctas: "+ correctas;
	document.getElementById("incorrectas").textContent = "Respuestas Incorrectas: " + incorrectas;
	document.getElementById("total").textContent = "TOTAL: " + correctas + "/5";
}

function quiz4()
{
	var correctas=0;
	var incorrectas=0;
	
	var pregunta1=document.fig1.figuras1.value;
	
	if(pregunta1=="C")
	{
        correctas++;
	}
	else
	{
        incorrectas++;
    }
    
    var pregunta2=document.fig2.figuras2.value;
	
	if(pregunta2=="B")
	{
        correctas++;
	}
	else
	{
        incorrectas++;
    }
    
     
    var pregunta3=document.fig3.figuras3.value;
	
	if(pregunta3=="B")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }

	 var pregunta4=document.fig4.figuras4.value;
	
	if(pregunta4=="A")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta5=document.fig5.figuras5.value;
	
	if(pregunta5=="D")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta6=document.fig6.figuras6.value;
	
	if(pregunta6=="C")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta7=document.fig7.figuras7.value;
	
	if(pregunta7=="D")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	
	document.getElementById("correctas").textContent = "Respuestas Correctas: "+ correctas;
	document.getElementById("incorrectas").textContent = "Respuestas Incorrectas: " + incorrectas;
	document.getElementById("total").textContent = "TOTAL: " + correctas + "/7";
}

function quiz5()
{
	var correctas=0;
	var incorrectas=0;
	
	var pregunta1=document.getElementById("p1").value;
	
	if(pregunta1=="Yellow" || pregunta1=="yellow")
	{
        correctas++;
	}
	else
	{
        incorrectas++;
    }
    
    var pregunta2=document.getElementById("p2").value;
	
	if(pregunta2=="Blue" || pregunta2=="blue")
	{
        correctas++;
	}
	else
	{
        incorrectas++;
    }
    
     
    var pregunta3=document.getElementById("p3").value;
	
	if(pregunta3=="Orange" || pregunta3=="orange")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }

	 var pregunta4=document.getElementById("p4").value;
	
	if(pregunta4=="Red" || pregunta4=="red")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	 var pregunta5=document.getElementById("p5").value;
	
	if(pregunta5=="Green" || pregunta5=="green")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	var pregunta6=document.getElementById("p6").value;
	
	if(pregunta6=="Purple" || pregunta6=="purple")
	{
        correctas++;
        
	}
	else
	{
        incorrectas++;
    }
	
	document.getElementById("correctas").textContent = "Respuestas Correctas: "+ correctas;
	document.getElementById("incorrectas").textContent = "Respuestas Incorrectas: " + incorrectas;
	document.getElementById("total").textContent = "TOTAL: " + correctas + "/6";
}

