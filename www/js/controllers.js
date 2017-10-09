angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('PerfilCtrl', function($scope) {
  
})

.controller('CachorrosCtrl', function($scope) {
  $scope.titulo = "Busca por cachorros";
  $scope.animais = [
    {
    "id": "1",
    "nome": "Thor ",
    "descricao": "No entanto, não podemos esquecer que o desenvolvimento contínuo de distintas formas de atuação cumpre um papel essencial na formulação das condições financeiras e administrativas exigidas. O que temos que ter sempre em mente é que a percepção das dificuldades exige a precisão e a definição do impacto na agilidade decisória.",
    "contato": "21543776",
    "imagem": "http://lorempixel.com/400/200//"
    },
    {
    "id": "2",
    "nome": "Spike",
    "descricao": "No entanto, não podemos esquecer que o desenvolvimento contínuo de distintas formas de atuação cumpre um papel essencial na formulação das condições financeiras e administrativas exigidas. O que temos que ter sempre em mente é que a percepção das dificuldades exige a precisão e a definição do impacto na agilidade decisória.",
    "contato": "21544556",
    "imagem": "http://lorempixel.com/400/200/"
    },
    {
    "id": "3",
    "nome": "Half",
    "descricao": "No entanto, não podemos esquecer que o desenvolvimento contínuo de distintas formas de atuação cumpre um papel essencial na formulação das condições financeiras e administrativas exigidas. O que temos que ter sempre em mente é que a percepção das dificuldades exige a precisão e a definição do impacto na agilidade decisória.",
    "contato": "37712676",
    "imagem": "http://lorempixel.com/400/200/"
    },
    {
    "id": "4",
    "nome": "Pit",
    "descricao": "No entanto, não podemos esquecer que o desenvolvimento contínuo de distintas formas de atuação cumpre um papel essencial na formulação das condições financeiras e administrativas exigidas. O que temos que ter sempre em mente é que a percepção das dificuldades exige a precisão e a definição do impacto na agilidade decisória.",
    "contato": "36715467",
    "imagem": "http://lorempixel.com/400/200/"
    }
  ];
})

.controller('GatosCtrl', function($scope) {
  $scope.titulo = "Busca por gatos";
  $scope.animais = [
    {
      "id": "1",
      "nome": "Miau",
      "descricao": "No entanto, não podemos esquecer que o desenvolvimento contínuo de distintas formas de atuação cumpre um papel essencial na formulação das condições financeiras e administrativas exigidas. O que temos que ter sempre em mente é que a percepção das dificuldades exige a precisão e a definição do impacto na agilidade decisória.",
      "contato": "21543776",
      "imagem": "http://lorempixel.com/400/200//"
    },
    {
      "id": "2",
      "nome": "Bilu",
      "descricao": "No entanto, não podemos esquecer que o desenvolvimento contínuo de distintas formas de atuação cumpre um papel essencial na formulação das condições financeiras e administrativas exigidas. O que temos que ter sempre em mente é que a percepção das dificuldades exige a precisão e a definição do impacto na agilidade decisória.",
      "contato": "21544556",
      "imagem": "http://lorempixel.com/400/200/"
    },
    {
      "id": "3",
      "nome": "Cat",
      "descricao": "Podemos já vislumbrar o modo pelo qual o desenvolvimento contínuo de distintas formas de atuação aponta para a melhoria das diretrizes de desenvolvimento para o futuro. Por outro lado, a execução dos pontos do programa é uma das consequências do levantamento das variáveis envolvidas.",
      "contato": "37712676",
      "imagem": "http://lorempixel.com/400/200/"
    },
    {
      "id": "4",
      "nome": "Silas",
      "descricao": "No entanto, não podemos esquecer que o desenvolvimento contínuo de distintas formas de atuação cumpre um papel essencial na formulação das condições financeiras e administrativas exigidas. O que temos que ter sempre em mente é que a percepção das dificuldades exige a precisão e a definição do impacto na agilidade decisória.",
      "contato": "36715467",
      "imagem": "http://lorempixel.com/400/200/"
    }
  ];
})
