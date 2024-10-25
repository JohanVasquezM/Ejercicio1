function calcularA() {
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;
  
    base = parseFloat(base);
    altura = parseFloat(altura);
  
    if (isNaN(base) || base <= 0) {
        document.getElementById('base').classList.add('is-invalid');
    } else {
        document.getElementById('base').classList.remove('is-invalid');
    }
  
    if (isNaN(altura) || altura <= 0) {
        document.getElementById('altura').classList.add('is-invalid');
    } else {
        document.getElementById('altura').classList.remove('is-invalid');
    }
  
    if (base > 0 && altura > 0) {
        var area = base * altura;
        document.getElementById('area').value = area.toFixed(2); // Mostrar el resultado con dos decimales
    } else {
        document.getElementById('area').value = ''; // Limpiar el campo si hay error
    }
  }
  
  function limpiar() {
    document.getElementById('base').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('area').value = '';
    document.getElementById('base').classList.remove('is-invalid');
    document.getElementById('altura').classList.remove('is-invalid');
  }