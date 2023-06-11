  document.getElementById('audio').addEventListener('click', function() {
    Swal.fire({
      title: 'Attention',
      text: 'Quitter sans sauvegarder les modifications ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'parametreAudio.html';
      }
    });
  });
  
  document.getElementById('accessibilite').addEventListener('click', function() {
    Swal.fire({
      title: 'Attention',
      text: 'Quitter sans sauvegarder les modifications ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'parametreAccessibilite.html';
      }
    });
  });
  
  document.getElementById('langue').addEventListener('click', function() {
    Swal.fire({
      title: 'Attention',
      text: 'Quitter sans sauvegarder les modifications ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'parametresLangues.html';
      }
    });
  });

  document.getElementById('compte').addEventListener('click', function() {
    Swal.fire({
      title: 'Attention',
      text: 'Quitter sans sauvegarder les modifications ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'parametresLangues.html';
      }
    });
  });
  
  document.getElementById('appliquer').addEventListener('click', function() {
    Swal.fire({
      title: 'Confirmation',
      text: 'Modifications appliquées',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  });
  