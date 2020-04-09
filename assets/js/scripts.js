var resultado = 0;
$('.resultado').html('Pontuação: ' + resultado + ' pontos.');

$('#email').keydown(function(event){
    if(event.keyCode == 13) {
        event.preventDefault();
        stop();
        $('#go-step-2').click();
    }
});

$('#go-step-2').click(function() {
    var identificador = 'Form Trade Marketing - Step 1';
    var nome = $('#nome');
    var telefone = $('#telefone');
    var email = $('#email');

    if(!nome.val()){
        nome.focus();
        $('.output').html('<span>Informe o seu nome.</span>');

    } else if(!telefone.val()){
        telefone.focus();
        $('.output').html('<span>Informe o seu telefone.</span>');

    } else if(!validacaoEmail(email.val())){
        email.focus();
        $('.output').html('<span>Informe o seu e-mail.</span>');

    } else {
        $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        $('.output').html('');
        $('.step1').hide();
        $('.step2').fadeIn();

        var sendRD = [
            { name: 'identificador', value: identificador},
            { name: 'Nome', value: nome.val()},
            { name: 'Telefone', value: telefone.val()},
            { name: 'email', value: email.val()},
            { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);

    }

});

$('#go-step-3').click(function() {

    if ($("#pergunta1-a").is(':checked') || $("#pergunta1-b").is(':checked') || $("#pergunta1-c").is(':checked') || $("#pergunta1-d").is(':checked') || $("#pergunta1-e").is(':checked')) {

        if ($("#pergunta1-a").is(':checked')) {
            resultado = resultado + 0.2;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta1-b").is(':checked')) {
            resultado = resultado + 0.4;      
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta1-c").is(':checked')) {
            resultado = resultado + 0.6;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta1-d").is(':checked')) {
            resultado = resultado + 0.8;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta1-e").is(':checked')) {
            resultado = resultado + 1;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }

        $('.output').html('');
        $('.step2').hide();
        $('.step3').fadeIn();

        var identificador = 'Form Trade Marketing - Pergunta 1';
        var nome = $('#nome');
        var telefone = $('#telefone');
        var email = $('#email');

        mountpergunta1 = [];
        $.each($("input[name='pergunta1']:checked"), function(){            
            mountpergunta1.push($(this).val());
        });

        var sendRD = [
            { name: 'identificador', value: identificador},
            { name: 'Nome', value: nome.val()},
            { name: 'Telefone', value: telefone.val()},
            { name: 'email', value: email.val()},
            { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
            { name: 'Trade Business Score', value: (Math.round(resultado * 100)/100).toFixed(2)},
            { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);

    } else {

        $('.output').html('<span>Selecione uma opção.</span>');

    }

});

$('#go-step-4').click(function() {

    if ($("#pergunta2-a").is(':checked') || $("#pergunta2-b").is(':checked') || $("#pergunta2-c").is(':checked') || $("#pergunta2-d").is(':checked') || $("#pergunta2-e").is(':checked')) {

        if ($("#pergunta2-a").is(':checked')) {
            resultado = resultado + 0.2;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta2-b").is(':checked')) {
            resultado = resultado + 0.4;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta2-c").is(':checked')) {
            resultado = resultado + 0.6;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta2-d").is(':checked')) {
            resultado = resultado + 0.8;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta2-e").is(':checked')) {
            resultado = resultado + 1;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }

        $('.output').html('');
        $('.step3').hide();
        $('.step4').fadeIn();

        var identificador = 'Form Trade Marketing - Pergunta 2';
        var nome = $('#nome');
        var telefone = $('#telefone');
        var email = $('#email');

        mountpergunta1 = [];
        $.each($("input[name='pergunta1']:checked"), function(){            
            mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='pergunta2']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });


        var sendRD = [
            { name: 'identificador', value: identificador},
            { name: 'Nome', value: nome.val()},
            { name: 'Telefone', value: telefone.val()},
            { name: 'email', value: email.val()},
            { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
            { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
            { name: 'Trade Business Score', value: (Math.round(resultado * 100)/100).toFixed(2)},
            { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);

    } else {

        $('.output').html('<span>Selecione uma opção.</span>');

    }
    
});

$('#go-step-5').click(function() {

    if ($("#pergunta3-a").is(':checked') || $("#pergunta3-b").is(':checked') || $("#pergunta3-c").is(':checked') || $("#pergunta3-d").is(':checked') || $("#pergunta3-e").is(':checked')) {


        if ($("#pergunta3-a").is(':checked')) {
            resultado = resultado + 0.2;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta3-b").is(':checked')) {
            resultado = resultado + 0.4;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta3-c").is(':checked')) {
            resultado = resultado + 0.6;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta3-d").is(':checked')) {
            resultado = resultado + 0.8;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta3-e").is(':checked')) {
            resultado = resultado + 1;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }

        $('.output').html('');
        $('.step4').hide();
        $('.step5').fadeIn();

        var identificador = 'Form Trade Marketing - Pergunta 3';
        var nome = $('#nome');
        var telefone = $('#telefone');
        var email = $('#email');

        mountpergunta1 = [];
        $.each($("input[name='pergunta1']:checked"), function(){            
            mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='pergunta2']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='pergunta3']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });

        var sendRD = [
            { name: 'identificador', value: identificador},
            { name: 'Nome', value: nome.val()},
            { name: 'Telefone', value: telefone.val()},
            { name: 'email', value: email.val()},
            { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
            { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
            { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
            { name: 'Trade Business Score', value: (Math.round(resultado * 100)/100).toFixed(2)},
            { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);

    } else {

        $('.output').html('<span>Selecione uma opção.</span>');

    }

});

$('#go-step-6').click(function() {

    if ($("#pergunta4-a").is(':checked') || $("#pergunta4-b").is(':checked') || $("#pergunta4-c").is(':checked') || $("#pergunta4-d").is(':checked') || $("#pergunta4-e").is(':checked')) {

        if ($("#pergunta4-a").is(':checked')) {
            resultado = resultado + 0.2;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta4-b").is(':checked')) {
            resultado = resultado + 0.4;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta4-c").is(':checked')) {
            resultado = resultado + 0.6;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta4-d").is(':checked')) {
            resultado = resultado + 0.8;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta4-e").is(':checked')) {
            resultado = resultado + 1;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        
        $('.output').html('');
        $('.step5').hide();
        $('.step6').fadeIn();

        var identificador = 'Form Trade Marketing - Pergunta 4';
        var nome = $('#nome');
        var telefone = $('#telefone');
        var email = $('#email');

        mountpergunta1 = [];
        $.each($("input[name='pergunta1']:checked"), function(){            
            mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='pergunta2']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='pergunta3']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });
        mountpergunta4 = [];
        $.each($("input[name='pergunta4']:checked"), function(){            
            mountpergunta4.push($(this).val());
        });


        var sendRD = [
            { name: 'identificador', value: identificador},
            { name: 'Nome', value: nome.val()},
            { name: 'Telefone', value: telefone.val()},
            { name: 'email', value: email.val()},
            { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
            { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
            { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
            { name: 'Pergunta 4', value: mountpergunta4.join(", ")},
            { name: 'Trade Business Score', value: (Math.round(resultado * 100)/100).toFixed(2)},
            { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);

    } else {

        $('.output').html('<span>Selecione uma opção.</span>');

    }

});

$('#go-step-7').click(function() {

    if ($("#pergunta5-a").is(':checked') || $("#pergunta5-b").is(':checked') || $("#pergunta5-c").is(':checked') || $("#pergunta5-d").is(':checked') || $("#pergunta5-e").is(':checked')) {

        if ($("#pergunta5-a").is(':checked')) {
            resultado = resultado + 0.2;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta5-b").is(':checked')) {
            resultado = resultado + 0.4;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta5-c").is(':checked')) {
            resultado = resultado + 0.6;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta5-d").is(':checked')) {
            resultado = resultado + 0.8;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta5-e").is(':checked')) {
            resultado = resultado + 1;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }

        $('.output').html('');
        $('.step6').hide();
        $('.step7').fadeIn();

        var identificador = 'Form Trade Marketing - Pergunta 5';
        var nome = $('#nome');
        var telefone = $('#telefone');
        var email = $('#email');

        mountpergunta1 = [];
        $.each($("input[name='pergunta1']:checked"), function(){            
            mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='pergunta2']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='pergunta3']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });
        mountpergunta4 = [];
        $.each($("input[name='pergunta4']:checked"), function(){            
            mountpergunta4.push($(this).val());
        });
        mountpergunta5 = [];
        $.each($("input[name='pergunta5']:checked"), function(){            
            mountpergunta5.push($(this).val());
        });


        var sendRD = [
            { name: 'identificador', value: identificador},
            { name: 'Nome', value: nome.val()},
            { name: 'Telefone', value: telefone.val()},
            { name: 'email', value: email.val()},
            { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
            { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
            { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
            { name: 'Pergunta 4', value: mountpergunta4.join(", ")},
            { name: 'Pergunta 5', value: mountpergunta5.join(", ")},
            { name: 'Trade Business Score', value: (Math.round(resultado * 100)/100).toFixed(2)},
            { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);
        console.log(resultado);

    } else {

        $('.output').html('<span>Selecione uma opção.</span>');

    }

});

$('#go-step-8').click(function() {

    if ($("#pergunta6-a").is(':checked') || $("#pergunta6-b").is(':checked') || $("#pergunta6-c").is(':checked') || $("#pergunta6-d").is(':checked') || $("#pergunta6-e").is(':checked')) {
        
        if ($("#pergunta6-a").is(':checked')) {
            resultado = resultado + 0.2;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta6-b").is(':checked')) {
            resultado = resultado + 0.4;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta6-c").is(':checked')) {
            resultado = resultado + 0.6;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta6-d").is(':checked')) {
            resultado = resultado + 0.8;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta6-e").is(':checked')) {
            resultado = resultado + 1;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
    
        $('.output').html('');
        $('.step7').hide();
        $('.step8').fadeIn();

        var identificador = 'Form Trade Marketing - Pergunta 6';
        var nome = $('#nome');
        var telefone = $('#telefone');
        var email = $('#email');

        mountpergunta1 = [];
        $.each($("input[name='pergunta1']:checked"), function(){            
            mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='pergunta2']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='pergunta3']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });
        mountpergunta4 = [];
        $.each($("input[name='pergunta4']:checked"), function(){            
            mountpergunta4.push($(this).val());
        });
        mountpergunta5 = [];
        $.each($("input[name='pergunta5']:checked"), function(){            
            mountpergunta5.push($(this).val());
        });
        mountpergunta6 = [];
        $.each($("input[name='pergunta6']:checked"), function(){            
            mountpergunta6.push($(this).val());
        });


        var sendRD = [
            { name: 'identificador', value: identificador},
            { name: 'Nome', value: nome.val()},
            { name: 'Telefone', value: telefone.val()},
            { name: 'email', value: email.val()},
            { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
            { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
            { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
            { name: 'Pergunta 4', value: mountpergunta4.join(", ")},
            { name: 'Pergunta 5', value: mountpergunta5.join(", ")},
            { name: 'Pergunta 6', value: mountpergunta6.join(", ")},
            { name: 'Trade Business Score', value: (Math.round(resultado * 100)/100).toFixed(2)},
            { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);

    } else {

        $('.output').html('<span>Selecione uma opção.</span>');

    }

});

$('#go-step-9').click(function() {

    if ($("#pergunta7-a").is(':checked') || $("#pergunta7-b").is(':checked') || $("#pergunta7-c").is(':checked') || $("#pergunta7-d").is(':checked') || $("#pergunta7-e").is(':checked')) {

        if ($("#pergunta7-a").is(':checked')) {
            resultado = resultado + 0.2;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta7-b").is(':checked')) {
            resultado = resultado + 0.4;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta7-c").is(':checked')) {
            resultado = resultado + 0.6;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta7-d").is(':checked')) {
            resultado = resultado + 0.8;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta7-e").is(':checked')) {
            resultado = resultado + 1;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }

        $('.output').html('');
        $('.step8').hide();
        $('.step9').fadeIn();

        var identificador = 'Form Trade Marketing - Pergunta 7';
        var nome = $('#nome');
        var telefone = $('#telefone');
        var email = $('#email');

        mountpergunta1 = [];
        $.each($("input[name='pergunta1']:checked"), function(){            
            mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='pergunta2']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='pergunta3']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });
        mountpergunta4 = [];
        $.each($("input[name='pergunta4']:checked"), function(){            
            mountpergunta4.push($(this).val());
        });
        mountpergunta5 = [];
        $.each($("input[name='pergunta5']:checked"), function(){            
            mountpergunta5.push($(this).val());
        });
        mountpergunta6 = [];
        $.each($("input[name='pergunta6']:checked"), function(){            
            mountpergunta6.push($(this).val());
        });
        mountpergunta7 = [];
        $.each($("input[name='pergunta7']:checked"), function(){            
            mountpergunta7.push($(this).val());
        });


    var sendRD = [
        { name: 'identificador', value: identificador},
        { name: 'Nome', value: nome.val()},
        { name: 'Telefone', value: telefone.val()},
        { name: 'email', value: email.val()},
        { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
        { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
        { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
        { name: 'Pergunta 4', value: mountpergunta4.join(", ")},
        { name: 'Pergunta 5', value: mountpergunta5.join(", ")},
        { name: 'Pergunta 6', value: mountpergunta6.join(", ")},
        { name: 'Pergunta 7', value: mountpergunta7.join(", ")},
        { name: 'Trade Business Score', value: (Math.round(resultado * 100)/100).toFixed(2)},
        { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
    ];

    RdIntegration.post(sendRD);

    } else {

        $('.output').html('<span>Selecione uma opção.</span>');

    }

});

$('#go-step-10').click(function() {

    if ($("#pergunta8-a").is(':checked') || $("#pergunta8-b").is(':checked') || $("#pergunta8-c").is(':checked') || $("#pergunta8-d").is(':checked') || $("#pergunta8-e").is(':checked')) {

        if ($("#pergunta8-a").is(':checked')) {
            resultado = resultado + 0.2;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta8-b").is(':checked')) {
            resultado = resultado + 0.4;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta8-c").is(':checked')) {
            resultado = resultado + 0.6;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta8-d").is(':checked')) {
            resultado = resultado + 0.8;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta8-e").is(':checked')) {
            resultado = resultado + 1;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }

        $('.output').html('');
        $('.step9').hide();
        $('.step10').fadeIn();

        var identificador = 'Form Trade Marketing - Pergunta 8';
        var nome = $('#nome');
        var telefone = $('#telefone');
        var email = $('#email');

        mountpergunta1 = [];
        $.each($("input[name='pergunta1']:checked"), function(){            
            mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='pergunta2']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='pergunta3']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });
        mountpergunta4 = [];
        $.each($("input[name='pergunta4']:checked"), function(){            
            mountpergunta4.push($(this).val());
        });
        mountpergunta5 = [];
        $.each($("input[name='pergunta5']:checked"), function(){            
            mountpergunta5.push($(this).val());
        });
        mountpergunta6 = [];
        $.each($("input[name='pergunta6']:checked"), function(){            
            mountpergunta6.push($(this).val());
        });
        mountpergunta7 = [];
        $.each($("input[name='pergunta7']:checked"), function(){            
            mountpergunta7.push($(this).val());
        });
        mountpergunta8 = [];
        $.each($("input[name='pergunta8']:checked"), function(){            
            mountpergunta8.push($(this).val());
        });


        var sendRD = [
            { name: 'identificador', value: identificador},
            { name: 'Nome', value: nome.val()},
            { name: 'Telefone', value: telefone.val()},
            { name: 'email', value: email.val()},
            { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
            { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
            { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
            { name: 'Pergunta 4', value: mountpergunta4.join(", ")},
            { name: 'Pergunta 5', value: mountpergunta5.join(", ")},
            { name: 'Pergunta 6', value: mountpergunta6.join(", ")},
            { name: 'Pergunta 7', value: mountpergunta7.join(", ")},
            { name: 'Pergunta 8', value: mountpergunta8.join(", ")},
            { name: 'Trade Business Score', value: (Math.round(resultado * 100)/100).toFixed(2)},
            { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);


    } else {

        $('.output').html('<span>Selecione uma opção.</span>');

    }

});

$('#go-step-11').click(function() {

    if ($("#pergunta9-a").is(':checked') || $("#pergunta9-b").is(':checked') || $("#pergunta9-c").is(':checked') || $("#pergunta9-d").is(':checked') || $("#pergunta9-e").is(':checked')) {

        if ($("#pergunta9-a").is(':checked')) {
            resultado = resultado + 0.2;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta9-b").is(':checked')) {
            resultado = resultado + 0.4;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta9-c").is(':checked')) {
            resultado = resultado + 0.6;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta9-d").is(':checked')) {
            resultado = resultado + 0.8;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta9-e").is(':checked')) {
            resultado = resultado + 1;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }

        $('.output').html('');
        $('.step10').hide();
        $('.step11').fadeIn();

        var identificador = 'Form Trade Marketing - Pergunta 9';
        var nome = $('#nome');
        var telefone = $('#telefone');
        var email = $('#email');

        mountpergunta1 = [];
        $.each($("input[name='pergunta1']:checked"), function(){            
            mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='pergunta2']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='pergunta3']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });
        mountpergunta4 = [];
        $.each($("input[name='pergunta4']:checked"), function(){            
            mountpergunta4.push($(this).val());
        });
        mountpergunta5 = [];
        $.each($("input[name='pergunta5']:checked"), function(){            
            mountpergunta5.push($(this).val());
        });
        mountpergunta6 = [];
        $.each($("input[name='pergunta6']:checked"), function(){            
            mountpergunta6.push($(this).val());
        });
        mountpergunta7 = [];
        $.each($("input[name='pergunta7']:checked"), function(){            
            mountpergunta7.push($(this).val());
        });
        mountpergunta8 = [];
        $.each($("input[name='pergunta8']:checked"), function(){            
            mountpergunta8.push($(this).val());
        });
        mountpergunta9 = [];
        $.each($("input[name='pergunta9']:checked"), function(){            
            mountpergunta9.push($(this).val());
        });


        var sendRD = [
            { name: 'identificador', value: identificador},
            { name: 'Nome', value: nome.val()},
            { name: 'Telefone', value: telefone.val()},
            { name: 'email', value: email.val()},
            { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
            { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
            { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
            { name: 'Pergunta 4', value: mountpergunta4.join(", ")},
            { name: 'Pergunta 5', value: mountpergunta5.join(", ")},
            { name: 'Pergunta 6', value: mountpergunta6.join(", ")},
            { name: 'Pergunta 7', value: mountpergunta7.join(", ")},
            { name: 'Pergunta 8', value: mountpergunta8.join(", ")},
            { name: 'Pergunta 9', value: mountpergunta9.join(", ")},
            { name: 'Trade Business Score', value: (Math.round(resultado * 100)/100).toFixed(2)},
            { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);

    } else {

        $('.output').html('<span>Selecione uma opção.</span>');

    }

});

$('#finish').click(function() {

    if ($("#pergunta10-a").is(':checked') || $("#pergunta10-b").is(':checked') || $("#pergunta10-c").is(':checked') || $("#pergunta10-d").is(':checked') || $("#pergunta10-e").is(':checked')) {

        if ($("#pergunta10-a").is(':checked')) {
            resultado = resultado + 0.2;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta10-b").is(':checked')) {
            resultado = resultado + 0.4;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta10-c").is(':checked')) {
            resultado = resultado + 0.6;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta10-d").is(':checked')) {
            resultado = resultado + 0.8;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        if ($("#pergunta10-e").is(':checked')) {
            resultado = resultado + 1;
            $('.resultado').html('Pontuação: ' + resultado + ' pontos.');
        }
        
        $('.output').html('');
        $('.step10').hide();
        $('.step11').fadeIn();

    } else {

        $('.output').html('<span>Selecione uma opção.</span>');

    }

});
;

$('#finish').click(function() {

    var identificador = 'Form Trade Marketing - Final';
    var nome = $('#nome');
    var telefone = $('#telefone');
    var email = $('#email');

    mountpergunta1 = [];
    $.each($("input[name='pergunta1']:checked"), function(){            
        mountpergunta1.push($(this).val());
    });
    mountpergunta2 = [];
    $.each($("input[name='pergunta2']:checked"), function(){            
        mountpergunta2.push($(this).val());
    });
    mountpergunta3 = [];
    $.each($("input[name='pergunta3']:checked"), function(){            
        mountpergunta3.push($(this).val());
    });
    mountpergunta4 = [];
    $.each($("input[name='pergunta4']:checked"), function(){            
        mountpergunta4.push($(this).val());
    });
    mountpergunta5 = [];
    $.each($("input[name='pergunta5']:checked"), function(){            
        mountpergunta5.push($(this).val());
    });
    mountpergunta6 = [];
    $.each($("input[name='pergunta6']:checked"), function(){            
        mountpergunta6.push($(this).val());
    });
    mountpergunta7 = [];
    $.each($("input[name='pergunta7']:checked"), function(){            
        mountpergunta7.push($(this).val());
    });
    mountpergunta8 = [];
    $.each($("input[name='pergunta8']:checked"), function(){            
        mountpergunta8.push($(this).val());
    });
    mountpergunta9 = [];
    $.each($("input[name='pergunta9']:checked"), function(){            
        mountpergunta9.push($(this).val());
    });
    mountpergunta10 = [];
    $.each($("input[name='pergunta10']:checked"), function(){            
        mountpergunta10.push($(this).val());
    });


    var sendRD = [
        { name: 'identificador', value: identificador},
        { name: 'Nome', value: nome.val()},
        { name: 'Telefone', value: telefone.val()},
        { name: 'email', value: email.val()},
        { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
        { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
        { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
        { name: 'Pergunta 4', value: mountpergunta4.join(", ")},
        { name: 'Pergunta 5', value: mountpergunta5.join(", ")},
        { name: 'Pergunta 6', value: mountpergunta6.join(", ")},
        { name: 'Pergunta 7', value: mountpergunta7.join(", ")},
        { name: 'Pergunta 8', value: mountpergunta8.join(", ")},
        { name: 'Pergunta 9', value: mountpergunta9.join(", ")},
        { name: 'Pergunta 10', value: mountpergunta10.join(", ")},
        { name: 'Trade Business Score', value: (Math.round(resultado * 100)/100).toFixed(2)},
        { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
    ];

    RdIntegration.post(sendRD);

    setTimeout(function() {
        window.location.href = "./obrigado.html";
    },500);
    
});


function validacaoEmail(email) {
    var verifica = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return verifica.test(String(email).toLowerCase());
}

$("#telefone")
    .mask("(99) 9999-9999?9")
    .focusout(function (event) {  
        var target, phone, element;  
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
        phone = target.value.replace(/\D/g, '');
        element = $(target);  
        element.unmask();  
        if(phone.length > 10) {  
            element.mask("(99) 99999-999?9");
        } else {  
            element.mask("(99) 9999-9999?9");
        }  
    });