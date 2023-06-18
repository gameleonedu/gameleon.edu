// Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
// abre e fecha menu lateral em pequenos ecrãs
  let menu_icon = document.querySelector('#menu_icon');
  let container = document.querySelector("#container");
  let drawer = document.querySelector('#drawer');
  menu_icon.addEventListener('click', function (e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
  });
  container.addEventListener('click', function () {
  drawer.classList.remove('open');menu_icon.classList.remove("change");
  });

//muda de menu hamburguer para cruz

function openclose(x) {
  x.classList.toggle("change");
  }

// Separação tabela em linhas e colunas
    window.onload = () => {
          var reader = new FileReader(),
              picker = document.getElementById("picker"),
              table = document.getElementById("table");
          picker.onchange = () => reader.readAsText(picker.files[0]);
          reader.onloadend = () => {
              let csv = reader.result;
              table.innerHTML = "";
              let rows = csv.split("\r\n");
              for(let row of rows) {
                  let cols = row.split(";");
                  if (cols != null) {
                      let tr = table.insertRow();
                      for(let col of cols) {
                          let td = tr.insertCell();
                          td.innerHTML = col;
                      }
                  }
              }
          };
      };

    function myFunction() {
        document.getElementById("titulo_1").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_2").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_3").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_4").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_5").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_6").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_7").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_8").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_9").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_10").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_11").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_12").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_13").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_14").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_15").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_16").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_17").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_18").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_19").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_20").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_21").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_22").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_23").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_24").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_25").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_26").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_27").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_28").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_29").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_30").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_31").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_32").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_33").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_34").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_35").inputMode = document.getElementById("temajogo");
        document.getElementById("titulo_36").inputMode = document.getElementById("temajogo");

        document.getElementById("pergunta_1").innerHTML = document.getElementById("table").rows[1].cells[2].innerHTML;
        document.getElementById("pergunta_2").innerHTML = document.getElementById("table").rows[2].cells[2].innerHTML;
        document.getElementById("pergunta_3").innerHTML = document.getElementById("table").rows[3].cells[2].innerHTML;
        document.getElementById("pergunta_4").innerHTML = document.getElementById("table").rows[4].cells[2].innerHTML;
        document.getElementById("pergunta_5").innerHTML = document.getElementById("table").rows[5].cells[2].innerHTML;
        document.getElementById("pergunta_6").innerHTML = document.getElementById("table").rows[6].cells[2].innerHTML;
        document.getElementById("pergunta_7").innerHTML = document.getElementById("table").rows[7].cells[2].innerHTML;
        document.getElementById("pergunta_8").innerHTML = document.getElementById("table").rows[8].cells[2].innerHTML;
        document.getElementById("pergunta_9").innerHTML = document.getElementById("table").rows[9].cells[2].innerHTML;
        document.getElementById("pergunta_10").innerHTML = document.getElementById("table").rows[10].cells[2].innerHTML;
        document.getElementById("pergunta_11").innerHTML = document.getElementById("table").rows[11].cells[2].innerHTML;
        document.getElementById("pergunta_12").innerHTML = document.getElementById("table").rows[12].cells[2].innerHTML;
        document.getElementById("pergunta_13").innerHTML = document.getElementById("table").rows[13].cells[2].innerHTML;
        document.getElementById("pergunta_14").innerHTML = document.getElementById("table").rows[14].cells[2].innerHTML;
        document.getElementById("pergunta_15").innerHTML = document.getElementById("table").rows[15].cells[2].innerHTML;
        document.getElementById("pergunta_16").innerHTML = document.getElementById("table").rows[16].cells[2].innerHTML;
        document.getElementById("pergunta_17").innerHTML = document.getElementById("table").rows[17].cells[2].innerHTML;
        document.getElementById("pergunta_18").innerHTML = document.getElementById("table").rows[18].cells[2].innerHTML;
        document.getElementById("pergunta_19").innerHTML = document.getElementById("table").rows[19].cells[2].innerHTML;
        document.getElementById("pergunta_20").innerHTML = document.getElementById("table").rows[20].cells[2].innerHTML;
        document.getElementById("pergunta_21").innerHTML = document.getElementById("table").rows[21].cells[2].innerHTML;
        document.getElementById("pergunta_22").innerHTML = document.getElementById("table").rows[22].cells[2].innerHTML;
        document.getElementById("pergunta_23").innerHTML = document.getElementById("table").rows[23].cells[2].innerHTML;
        document.getElementById("pergunta_24").innerHTML = document.getElementById("table").rows[24].cells[2].innerHTML;
        document.getElementById("pergunta_25").innerHTML = document.getElementById("table").rows[25].cells[2].innerHTML;
        document.getElementById("pergunta_26").innerHTML = document.getElementById("table").rows[26].cells[2].innerHTML;
        document.getElementById("pergunta_27").innerHTML = document.getElementById("table").rows[27].cells[2].innerHTML;
        document.getElementById("pergunta_28").innerHTML = document.getElementById("table").rows[28].cells[2].innerHTML;
        document.getElementById("pergunta_29").innerHTML = document.getElementById("table").rows[29].cells[2].innerHTML;
        document.getElementById("pergunta_30").innerHTML = document.getElementById("table").rows[30].cells[2].innerHTML;
        document.getElementById("pergunta_31").innerHTML = document.getElementById("table").rows[31].cells[2].innerHTML;
        document.getElementById("pergunta_32").innerHTML = document.getElementById("table").rows[32].cells[2].innerHTML;
        document.getElementById("pergunta_33").innerHTML = document.getElementById("table").rows[33].cells[2].innerHTML;
        document.getElementById("pergunta_34").innerHTML = document.getElementById("table").rows[34].cells[2].innerHTML;
        document.getElementById("pergunta_35").innerHTML = document.getElementById("table").rows[35].cells[2].innerHTML;
        document.getElementById("pergunta_36").innerHTML = document.getElementById("table").rows[36].cells[2].innerHTML;
        
        document.getElementById("resposta_1").innerHTML = document.getElementById("table").rows[1].cells[6].innerHTML;
        document.getElementById("resposta_2").innerHTML = document.getElementById("table").rows[2].cells[6].innerHTML;
        document.getElementById("resposta_3").innerHTML = document.getElementById("table").rows[3].cells[6].innerHTML;
        document.getElementById("resposta_4").innerHTML = document.getElementById("table").rows[4].cells[6].innerHTML;
        document.getElementById("resposta_5").innerHTML = document.getElementById("table").rows[5].cells[6].innerHTML;
        document.getElementById("resposta_6").innerHTML = document.getElementById("table").rows[6].cells[6].innerHTML;
        document.getElementById("resposta_7").innerHTML = document.getElementById("table").rows[7].cells[6].innerHTML;
        document.getElementById("resposta_8").innerHTML = document.getElementById("table").rows[8].cells[6].innerHTML;
        document.getElementById("resposta_9").innerHTML = document.getElementById("table").rows[9].cells[6].innerHTML;
        document.getElementById("resposta_10").innerHTML = document.getElementById("table").rows[10].cells[6].innerHTML;
        document.getElementById("resposta_11").innerHTML = document.getElementById("table").rows[11].cells[6].innerHTML;
        document.getElementById("resposta_12").innerHTML = document.getElementById("table").rows[12].cells[6].innerHTML;
        document.getElementById("resposta_13").innerHTML = document.getElementById("table").rows[13].cells[6].innerHTML;
        document.getElementById("resposta_14").innerHTML = document.getElementById("table").rows[14].cells[6].innerHTML;
        document.getElementById("resposta_15").innerHTML = document.getElementById("table").rows[15].cells[6].innerHTML;
        document.getElementById("resposta_16").innerHTML = document.getElementById("table").rows[16].cells[6].innerHTML;
        document.getElementById("resposta_17").innerHTML = document.getElementById("table").rows[17].cells[6].innerHTML;
        document.getElementById("resposta_18").innerHTML = document.getElementById("table").rows[18].cells[6].innerHTML;
        document.getElementById("resposta_19").innerHTML = document.getElementById("table").rows[19].cells[6].innerHTML;
        document.getElementById("resposta_20").innerHTML = document.getElementById("table").rows[20].cells[6].innerHTML;
        document.getElementById("resposta_21").innerHTML = document.getElementById("table").rows[21].cells[6].innerHTML;
        document.getElementById("resposta_22").innerHTML = document.getElementById("table").rows[22].cells[6].innerHTML;
        document.getElementById("resposta_23").innerHTML = document.getElementById("table").rows[23].cells[6].innerHTML;
        document.getElementById("resposta_24").innerHTML = document.getElementById("table").rows[24].cells[6].innerHTML;
        document.getElementById("resposta_25").innerHTML = document.getElementById("table").rows[25].cells[6].innerHTML;
        document.getElementById("resposta_26").innerHTML = document.getElementById("table").rows[26].cells[6].innerHTML;
        document.getElementById("resposta_27").innerHTML = document.getElementById("table").rows[27].cells[6].innerHTML;
        document.getElementById("resposta_28").innerHTML = document.getElementById("table").rows[28].cells[6].innerHTML;
        document.getElementById("resposta_29").innerHTML = document.getElementById("table").rows[29].cells[6].innerHTML;
        document.getElementById("resposta_30").innerHTML = document.getElementById("table").rows[30].cells[6].innerHTML;
        document.getElementById("resposta_31").innerHTML = document.getElementById("table").rows[31].cells[6].innerHTML;
        document.getElementById("resposta_32").innerHTML = document.getElementById("table").rows[32].cells[6].innerHTML;
        document.getElementById("resposta_33").innerHTML = document.getElementById("table").rows[33].cells[6].innerHTML;
        document.getElementById("resposta_34").innerHTML = document.getElementById("table").rows[34].cells[6].innerHTML;
        document.getElementById("resposta_35").innerHTML = document.getElementById("table").rows[35].cells[6].innerHTML;
        document.getElementById("resposta_36").innerHTML = document.getElementById("table").rows[36].cells[6].innerHTML;
    
        document.getElementById("EM_13A").innerHTML = document.getElementById("table").rows[13].cells[3].innerHTML;
        document.getElementById("EM_13B").innerHTML = document.getElementById("table").rows[13].cells[4].innerHTML;
        document.getElementById("EM_13C").innerHTML = document.getElementById("table").rows[13].cells[5].innerHTML;
        document.getElementById("EM_14A").innerHTML = document.getElementById("table").rows[14].cells[3].innerHTML;
        document.getElementById("EM_14B").innerHTML = document.getElementById("table").rows[14].cells[4].innerHTML;
        document.getElementById("EM_14C").innerHTML = document.getElementById("table").rows[14].cells[5].innerHTML;
        document.getElementById("EM_15A").innerHTML = document.getElementById("table").rows[15].cells[3].innerHTML;
        document.getElementById("EM_15B").innerHTML = document.getElementById("table").rows[15].cells[4].innerHTML;
        document.getElementById("EM_15C").innerHTML = document.getElementById("table").rows[15].cells[5].innerHTML;
        document.getElementById("EM_16A").innerHTML = document.getElementById("table").rows[16].cells[3].innerHTML;
        document.getElementById("EM_16B").innerHTML = document.getElementById("table").rows[16].cells[4].innerHTML;
        document.getElementById("EM_16C").innerHTML = document.getElementById("table").rows[16].cells[5].innerHTML;
        document.getElementById("EM_17A").innerHTML = document.getElementById("table").rows[17].cells[3].innerHTML;
        document.getElementById("EM_17B").innerHTML = document.getElementById("table").rows[17].cells[4].innerHTML;
        document.getElementById("EM_17C").innerHTML = document.getElementById("table").rows[17].cells[5].innerHTML;
        document.getElementById("EM_18A").innerHTML = document.getElementById("table").rows[18].cells[3].innerHTML;
        document.getElementById("EM_18B").innerHTML = document.getElementById("table").rows[18].cells[4].innerHTML;
        document.getElementById("EM_18C").innerHTML = document.getElementById("table").rows[18].cells[5].innerHTML;
        document.getElementById("EM_19A").innerHTML = document.getElementById("table").rows[19].cells[3].innerHTML;
        document.getElementById("EM_19B").innerHTML = document.getElementById("table").rows[19].cells[4].innerHTML;
        document.getElementById("EM_19C").innerHTML = document.getElementById("table").rows[19].cells[5].innerHTML;
        document.getElementById("EM_20A").innerHTML = document.getElementById("table").rows[20].cells[3].innerHTML;
        document.getElementById("EM_20B").innerHTML = document.getElementById("table").rows[20].cells[4].innerHTML;
        document.getElementById("EM_20C").innerHTML = document.getElementById("table").rows[20].cells[5].innerHTML;
        document.getElementById("EM_21A").innerHTML = document.getElementById("table").rows[21].cells[3].innerHTML;
        document.getElementById("EM_21B").innerHTML = document.getElementById("table").rows[21].cells[4].innerHTML;
        document.getElementById("EM_21C").innerHTML = document.getElementById("table").rows[21].cells[5].innerHTML;
        document.getElementById("EM_22A").innerHTML = document.getElementById("table").rows[22].cells[3].innerHTML;
        document.getElementById("EM_22B").innerHTML = document.getElementById("table").rows[22].cells[4].innerHTML;
        document.getElementById("EM_22C").innerHTML = document.getElementById("table").rows[22].cells[5].innerHTML;
        document.getElementById("EM_23A").innerHTML = document.getElementById("table").rows[23].cells[3].innerHTML;
        document.getElementById("EM_23B").innerHTML = document.getElementById("table").rows[23].cells[4].innerHTML;
        document.getElementById("EM_23C").innerHTML = document.getElementById("table").rows[23].cells[5].innerHTML;
        document.getElementById("EM_24A").innerHTML = document.getElementById("table").rows[24].cells[3].innerHTML;
        document.getElementById("EM_24B").innerHTML = document.getElementById("table").rows[24].cells[4].innerHTML;
        document.getElementById("EM_24C").innerHTML = document.getElementById("table").rows[24].cells[5].innerHTML;

        var x = document.getElementById("geradorCartas_1");
        var y = document.getElementById("geradorCartas_2");
        var z = document.getElementById("geradorCartas_3");
        var w = document.getElementById("novobaralhocartas");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none"; y.style.display = "block"; z.style.display = "block"; w.style.display ="none";
        }

    }

    function myFunctionReturn() {
      var x = document.getElementById("geradorCartas_1");
      var y = document.getElementById("geradorCartas_2");
      var z = document.getElementById("geradorCartas_3");
      var w = document.getElementById("novobaralhocartas");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block"; y.style.display = "none"; z.style.display = "none"; w.style.display ="block";
      }  
    }
  
// Imprime janela
  

//      function printDiv(printDiv){
//      var printContents = document.getElementById(printDiv).innerHTML;
//      var originalContents = document.body.innerHTML;
//      document.body.innerHTML = printContents;
//      window.print();
//      document.body.innerHTML = originalContents;}


//imprime carroussel

      function printDiv(printDiv) {
          var i;
          var x = document.getElementsByClassName("slideshow");
          for (i = 0; i < x.length; i++) {
          x[i].style.display = "block";}
          print();
  
          var slideIndex = 1;
          showDivs(slideIndex);
      
          function plusDivs(n) {
          showDivs(slideIndex += n);
          }
      
          function currentDiv(n) {
          showDivs(slideIndex = n);
          }
      }
      
          function showDivs(n) {
              var i;
              var x = document.getElementsByClassName("slideshow");
              var dots = document.getElementsByClassName("pagina");
              if (n > x.length) {slideIndex = 1}    
              if (n < 1) {slideIndex = x.length}
              for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";  
              }
              x[slideIndex-1].style.display = "block";  
              }
 
  
 // Personalização imagem fundo das cartas
  
      var imagemcarta = document.getElementById("imagemcarta");
      var loadFile = function(event){
          carta1.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
          carta2.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
          carta3.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
          carta4.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
          carta5.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
          carta6.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
          carta7.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
          carta8.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
      }

      
      var slideIndex = 1;
      showDivs(slideIndex);
      
      function plusDivs(n) {
        showDivs(slideIndex += n);
      }
      
      function currentDiv(n) {
        showDivs(slideIndex = n);
      }
      
      function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("slideshow");
        var dots = document.getElementsByClassName("pagina");
        if (n > x.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace("border-color: black", "");
        }
        x[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += "border-color: black";
      }

// Mostrar elementos com o scroll

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Mostrar elementos com o click

function showonhover_index_red() {
  var x = document.getElementById("info_vermelho");
  var y = document.getElementById("botao_info_vermelho")
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "hidden"
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "visible"
  }
}

function showonhover_index_blue() {
  var x = document.getElementById("info_azul");
  var y = document.getElementById("botao_info_azul")
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "hidden"
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "visible"
  }
}

function showonhover_index_green() {
  var x = document.getElementById("info_verde");
  var y = document.getElementById("botao_info_verde")
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "hidden"
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "visible"
  }
}

function showonleave_index_red() {
  var x = document.getElementById("info_vermelho");
  var y = document.getElementById("botao_info_vermelho")
  if (y.style.visibility === "hidden") {
    y.style.visibility = "visible";
    x.style.visibility = "hidden"
  } else {
    y.style.visibility = "hidden";
    x.style.visibility = "visible"
  }
}

function showonleave_index_blue() {
  var x = document.getElementById("info_azul");
  var y = document.getElementById("botao_info_azul")
  if (y.style.visibility === "hidden") {
    y.style.visibility = "visible";
    x.style.visibility = "hidden"
  } else {
    y.style.visibility = "hidden";
    x.style.visibility = "visible"
  }
}

function showonleave_index_green() {
  var x = document.getElementById("info_verde");
  var y = document.getElementById("botao_info_verde")
  if (y.style.visibility === "hidden") {
    y.style.visibility = "visible";
    x.style.visibility = "hidden"
  } else {
    y.style.visibility = "hidden";
    x.style.visibility = "visible"
  }
}

function onleavered() {
  var x = document.getElementById("detalhe_baralhonovo");
  var y = document.getElementById("baralhonovo");

  if (y.style.visibility === "hidden") {
    y.style.visibility = "visible";
    x.style.visibility = "hidden";
  } else {
    y.style.visibility = "hidden";
    x.style.visibility = "visible";
  }
}

function showonhoverred() {
  var x = document.getElementById("detalhe_baralhonovo");
  var y = document.getElementById("baralhonovo");

  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "hidden";
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "visible";
  }
}

function onleavegreen() {
  var x = document.getElementById("detalhe_baralhosfeitos");
  var y = document.getElementById("baralhosfeitos");

  if (y.style.visibility === "hidden") {
    y.style.visibility = "visible";
    x.style.visibility = "hidden";
  } else {
    y.style.visibility = "hidden";
    x.style.visibility = "visible";
  }
}

function showonhovergreen() {
  var x = document.getElementById("detalhe_baralhosfeitos");
  var y = document.getElementById("baralhosfeitos");

  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "hidden";
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "visible";
  }
}




