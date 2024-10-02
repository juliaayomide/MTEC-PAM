// Objetos
 var aluno = {
    matricula: 7627364,
    nome: 'Danilo Ferreira',
    curso: 'Bootcamp Front End',
    ativo: true
 };

 var aluno1 = {
    matricula: 234567,
    nome: 'Isabella Louise',
    curso: 'Desenvolvimento de Sistemas',
    dataNascimento: '17/09/2007',
    rm: 23456,
    idade: 17,
    ativo: true
 };

 var aluno2 = {
    matricula: 345678,
    nome: 'Julia Ayomide',
    curso: 'Desenvolvimento de Sistemas',
    dataNascimento: '07/04/2007',
    rm: 12345,
    idade: 17,
    ativo: true
 };

 //mostrando objetos;
 console.log(aluno1);
 console.log(aluno2);

 // Adicionando data de nascimento ao objeto aluno
 aluno1.dataNascimento = '03/07/1985';
 console.log(aluno1.dataNascimento);

 delete aluno1.dataNascimento;

 // Undefined e null (como definir com 0)

 var x;
 var y = null;

 // Arrays

 var frutas = ['Banana', 'Laranja', 'Maçã']