'use strict';

const Telegram = require('telegram-node-bot');

class MenuController extends Telegram.TelegramBaseController {
    handle($) {
    	var t = $.message.text;
    	var r;

    	switch(t){
    		case '1':
				$.sendMessage(
					$.message.chat.firstName
					+ ", escolha uma das seguintes opções:\n\n"
					+ "10 - A Secretaria\n"
					+ "11 - Consultar Processos\n"
					+ "12 - Contatos\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 1;
				console.log(r);
			break;

			case '2':
				$.sendMessage(
					$.message.chat.firstName
					+ ", escolha uma das seguintes opções:\n\n"
					+ "20- O que é ?\n"
					+ "21- Serviços\n"
					+ "22- Próxima Edição\n"
					+ "23- Números Atualizados\n"
					+ "24- Contatos\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 2;
			break;

			case '3':
				$.sendMessage(
					"*Cartão Metrobus*\n\n"
					+ "Benefício que concede desconto de 50% na tarifa aos usuários do Sistema Metropolitano\n\n"
					+ "Anhanguera – SMA, que compreende, além do Eixo Anhanguera e suas extensões, também as\n\n" 
					+ "Linhas Alimentadoras nele integradas. A Segov já realizou o cadastro de 54.828 beneficiados.\n" 
					+ "Saiba mais: http://www.juventude.go.gov.br/cartão-metrobus/dúvidas-faq-cart%C3%A3o-metrobus\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 3;
			break;

			case '4':
				$.sendMessage(
					$.message.chat.firstName
					+ ", escolha uma das seguintes opções:\n\n"
					+ "40 - O que é?\n"
					+ "41 - Cadastro/Recadastro\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 4;
			break;

			case '5':
				$.sendMessage(
					$.message.chat.firstName
					+ ", escolha uma das seguintes opções:\n\n"
					+ "50- O que fazemos?\n"
					+ "51- Passe Livre Estudantil\n"
					+ "52- Estágios\n"
					+ "53- Cartão Metrobus\n"
					+ "54- Goiás Sem Fronteiras\n"
					+ "55- Escola de Líderes\n"
					+ "56- Contatos\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 5;
			break;

			case '6':
				$.sendMessage(
					"*Estamos Ataualizando nossos sistemas!*\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 6;
			break;

			case '7':
				$.sendMessage(
					$.message.chat.firstName
					+ ", escolha uma das seguintes opções:\n\n"
					+ "70 - O que é?\n"
					+ "71- Valor da UHD\n"
					+ "72- Contatos\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 7;
			break;

			case '8':
				$.sendMessage(
					$.message.chat.firstName
					+ ", escolha uma das seguintes opções:\n\n"
					+ "80 - Redes Sociais\n"
					+ "81 - Contatos\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 8;
			break;

			case '10':
				$.sendMessage(
					"*A Secretaria*\n\n"
					+ "A Secretaria de Governo (Segov) estreita laços entre o Governo de Goiás e a sociedade, " 
					+ "estimulando o bom relacionamento com líderes políticos, comunitários, classistas, " 
					+ "municipalistas e com a população em geral.\n"
					+ "Acesse o site da Segov: goo.gl/nMjVDs\n"
					+ "Competências da Secretaria: goo.gl/VHT27i\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = "10";
				console.log(r);
			break;

			case '11':
				$.sendMessage(
					"*Consultar Processos*\n"
					+ "A Secretaria Geral da Segov – Protocolo : 3201 5625\n"
					+ "Acesse: goo.gl/MqfVt\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 11;
			break;

			case '12':
				$.sendMessage(
					"*Contatos*\n"
					+ "- Secretário: Tayrone Di Martino – 3201 5601 / 3201 5602\n"
					+ "- Superintendente Executivo: Nelson Henrique – 3201 5622\n"
					+ "- Chefe de Gabinete: Vera Quixabeira – 3201 5601/ 3201 5602\n"
					+ "- Sup. de Gestão, Planej. e Finanças: Valfran de Sousa Riberio – 3201 5637\n"
					+ "- Sup. da Juventude: Leonardo Felipe Marques – 3201 5646\n"
					+ "- Sup. de Articulação Política e Apoio Municipal: Corivaldo de Freitas - 3201 5694\n"
					+ "- Chefe da Advocacia Setorial: Ana Paula Lima Florentino Alves Ferreira – 3201 5605\n"
					+ "- Chefe da Comunicação Setorial: José Leopoldo de Veiga Jardim – 3201 5614\n"
					+ "- E-mail: chefiagab.segov@gmail.com\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 12;
			break;

			case '20':
				$.sendMessage(
					"*O que é ?\n*"
					+ "É uma ação que disponibiliza nos municípios um espaço físico móvel, moderno, transparente, "
					+ "informatizado e com equipe profissional treinada e capacitada, capaz de promover a "
					+ "aproximação entre as instituições oficiais e o cidadão, oferecendo processos administrativos, "
					+ "distribuindo mecanismos de inserção social e serviços públicos para a população.\n"
					+ "Acesse: goo.gl/61V8py\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 20;
			break;

			case '21':
				$.sendMessage(
					"*Serviços*\n\n"
					+"Diversos serviços para você e sua família\n"
					+"- Casamento Comunitário;\n"
					+"- Vapt Vupt;\n"
					+"- Consultas oftalmológicas;\n"
					+"- Encaminhamentos para cirurgias de catarata;\n"
					+"- 2ª via de Registro Civil;\n"
					+"- Emissão de Carteira de Identidade;\n"
					+"- Cabeleireiros;\n"
					+"- Aferição de pressão e glicemia;\n"
					+"- Distribuição de medicamentos;\n"
					+"- Coleta de sangue para doação;\n"
					+"- Veja mais serviços:\n"
					+"https://www.facebook.com/secretariadegovernodegoias/photos/pcb.1715502972097961/1715502725431319/?type=3&theater\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 21;
			break;

			case '22':
				$.sendMessage(
					"*Próxima Edição\n\n"
					+ "Atenção! Em breve você receberá uma mensagem com a data e o local da próxima edição do" 
					+ "Governo Junto de Você. Fique atento e obrigado!\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 22;
			break;

			case '23':
				$.sendMessage(
					"*Números Atualizados*\n\n" 
					+ "Em 2016, a Segov realizou oito edições do programa, totalizando 50 edições desde a sua " 
					+ "criação, com mais de 3 milhões de atendimentos. A Segov também executou edições especiais "
					+ "do programa: uma do Governo Junto dos Idosos e duas do SSP Junto de Você. A 51ª edição " 
					+ "foi realizada em Janeiro de 2017, em Goianira, e realizou 63.489 atendimentos.\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 23;
			break;

			case '24':
				$.sendMessage(
					"*Contatos*\n\n"
					+ "Coordenadora do Governo Junto de Você: Vera Quixabeira\n"
					+ "Telefones: 3201 5601 / 3201 5602\n" 
					+ "Email: chefiagab.segov@gmail.com\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 24;
			break;

			case '40':
				$.sendMessage(
					"*Estamos Ataualizando nossos sistemas!*\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 40;
			break;

			case '41':
				$.sendMessage(
					"*Estamos Ataualizando nossos sistemas!*\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 41;
			break;

			case '50':
				$.sendMessage(
					"*O que fazemos?*\n"
					+ "A Superintendência da Juventude da Segov e o Governo de Goiás desenvolvem políticas que " 
					+ "visam reduzir vulnerabilidades e ampliar oportunidades para os jovens, beneficiando, " 
					+ "capacitando e valorizando a juventude.\n"
					+ "Saiba mais: goo.gl/f7hyNk\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 50;
			break;

			case '51':
				$.sendMessage(
					"*Passe Livre Estudantil*\n\n"
					+ "A ação proporciona gratuidade do transporte coletivo a todos os estudantes da Região Metropolitana de Goiânia objetivando reduzir a evasão escolar. Mensalmente são beneficiados cerca de 50.000 estudantes.\n"
					+ "Acesse: goo.gl/1Q8XWe\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 51;
			break;

			case '52':
				$.sendMessage(
					"*Estágios*\n\n"
					+ "A Segov centraliza a admissão de estagiários em todos os órgãos do Estado. Desde 2015, a "
					+ "Segov encaminhou para contratação cerca de 3 mil estudantes de diversos cursos para os "
					+ "órgãos da Administração Executiva Estadual. Neste momento esta sendo desenvolvido o "
					+ "Discipulus, um sistema corporativo para controle deste processo, interligado ao RHnet\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 52;
			break;

			case '53':
				$.sendMessage(
					"*Cartão Metrobus*\n\n"
					+ "Benefício que concede desconto de 50% na tarifa aos usuários do Sistema Metropolitano "
					+ "Anhanguera – SMA, que compreende, além do Eixo Anhanguera e suas extensões, também as "
					+ "Linhas Alimentadoras nele integradas. A Segov já realizou o cadastro de 54.828 beneficiados.\n"
					+ "Saiba mais: http://www.juventude.go.gov.br/cartão-metrobus/dúvidas-faq-cart%C3%A3o-metrobus\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 53;
			break;

			case '54':
				$.sendMessage(
					"*Goiás Sem Fronteiras*\n\n"
					+ "Tem como objetivo propiciar o deslocamento e a permanência de estudantes em "
					+ "universidades conveniadas do exterior, assegurando uma formação em língua estrangeira.\n"
					+ "Atualmente estão sendo realizados estudos para realização de processo seletivo, que contará "
					+ "com as seguintes etapas: Seleção, Entrega de Documentação e Curso Preparatório.\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 54;
			break;

			case '55':
				$.sendMessage(
					"*Escola de Líderes*\n\n"
					+ "É um curso ministrado a alunos da rede estadual de ensino sobre as políticas públicas para "
					+ "juventude. Busca auxiliar na construção de uma cultura de paz e cidadania. Trata-se de um "
					+ "espaço criado para debater os mais diversos temas da atualidade. Busca desenvolver nos "
					+ "jovens uma visão democrática na reflexão dos interesses sociais. "
					+ "A ação engloba alunos de 15 a 17 anos matriculados no 1° e 2° ano do ensino médio, e "
					+ "permite o diálogo direto com o poder público. Inicialmente, os alunos recebem orientações "
					+ "sobre direitos humanos, reforma política e inclusão digital.\n"
					+ "http://www.juventude.go.gov.br/escola-de-lideres-2/124-escola-de-lideres.\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 55;
			break;

			case '56':
				$.sendMessage(
					"*Contatos*\n\n"
					+ "Superintendente da Juventude: Leonardo Felipe Marques de Souza\n"
					+ "Telefones: 3201-5612 / 3201-5632 / 3201-5639 / 3201-5646\n"
					+ "Email: leonardofelipe@juventude.go.gov.br\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 56;
			break;

			case '70':
				$.sendMessage(
					"*O que é Advogados Dativos?*\n\n"
					+ "A Segov é responsável pela organização, análise e instrução processual, necessárias ao regular "
					+ "pagamento da remuneração dos serviços de assistência judiciária prestada pelos advogados dativos.\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 70;
			break;

			case '71':
				$.sendMessage(
					"*Valor da UHD*\n\n"
					+ "A Unidade de Honorários Dativos (UHD), paga aos advogados dativos, é de R$ 165,25. "
					+ "A Segov iniciou a estruturação de uma unidade para a gestão dos pagamentos realizados, além do desenvolvimento de um sistema corporativo para esta finalidade.\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 71;
			break;

			case '72':
				$.sendMessage(
					"*Contatos*\n\n"
					+ "Coordenador dos Honorários dativos: Ricardo Borges Capelli\n" 
					+ "Tel: 3201 5636\n"
					+ "Email: dativos@segov.go.gov.br\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 72;
			break;

			case '80':
				$.sendMessage(
					"*Estamos Ataualizando nossos sistemas!*\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 80;
			break;

			case '81':
				$.sendMessage(
					"*Estamos Ataualizando nossos sistemas!*\n\n\n\n"
					+ "Digite *0* para voltar ao menu anterior."
					,{ parse_mode: 'Markdown' }
				);
				r = 81;
			break;
			//case de retorno de menu
			case '0':
				var res = r;
				if( r == 1 || r == 2 || r == 3 || r == 4 || r == 5 || r == 6 || r == 7 || r == 8 ){
					$.sendMessage(
						$.message.chat.firstName
						+ ", escolha uma das seguintes opções:\n\n"
						+ "1 - SEGOV\n"
						+ "2 - GOVERNO JUNTO DE VOCÊ\n"
						+ "3 - CARTÃO METROBUS\n"
						+ "4 - PASSE LIVRE ESTUDANTIL\n"
						+ "5 - JUVENTUDE\n"
						+ "6 - CONVÊNIOS\n"
						+ "7 - ADVOGADOS DATIVOS\n"
						+ "8 - FALE CONOSCO\n\n"
						+ "*SEU ID:* " + $.message.chat.id +"\n"
						,{ parse_mode: 'Markdown' }
					);
					console.log(r+"teste");
				}else if( r == "10" || r == 11 || r == 12 ){
					$.sendMessage(
						$.message.chat.firstName
						+ ", escolha uma das seguintes opções:\n\n"
						+ "10 - A Secretaria\n"
						+ "11 - Consultar Processos\n"
						+ "12 - Contatos\n\n"
						+ "Digite *0* para voltar ao menu anterior."
						,{ parse_mode: 'Markdown' }
					);
				}else if( r == 20 || r == 21 || r == 22 || r == 23 || r == 24 ){
					$.sendMessage(
						$.message.chat.firstName
						+ ", escolha uma das seguintes opções:\n\n"
						+ "20- O que é ?\n"
						+ "21- Serviços\n"
						+ "22- Próxima Edição\n"
						+ "23- Números Atualizados\n"
						+ "24- Contatos\n\n"
						+ "Digite *0* para voltar ao menu anterior."
						,{ parse_mode: 'Markdown' }
					);
				}else if( r == 40 || r == 41 ){
					$.sendMessage(
						$.message.chat.firstName
						+ ", escolha uma das seguintes opções:\n\n"
						+ "40 - O que é?\n"
						+ "41 - Cadastro/Recadastro\n\n"
						+ "Digite *0* para voltar ao menu anterior."
						,{ parse_mode: 'Markdown' }
					);
				}else if( r==50 || r == 51 || r == 52 || r == 53 || r == 54 || r == 55 || r == 56 ){
					$.sendMessage(
						$.message.chat.firstName
						+ ", escolha uma das seguintes opções:\n\n"
						+ "50- O que fazemos?\n"
						+ "51- Passe Livre Estudantil\n"
						+ "52- Estágios\n"
						+ "53- Cartão Metrobus\n"
						+ "54- Goiás Sem Fronteiras\n"
						+ "55- Escola de Líderes\n"
						+ "56- Contatos\n\n"
						+ "Digite *0* para voltar ao menu anterior."
						,{ parse_mode: 'Markdown' }
					);
				}else if( r == 70 || r == 71 || r == 72 ){
					$.sendMessage(
						$.message.chat.firstName
						+ "70 - O que é?\n"
						+ "71- Valor da UHD\n"
						+ "72- Contatos\n\n"
						+ "Digite *0* para voltar ao menu anterior."
						,{ parse_mode: 'Markdown' }
					);
				}else if( r == 80 || r == 81){
					$.sendMessage(
						$.message.chat.firstName
						+ ", escolha uma das seguintes opções:\n\n"
						+ "80 - Redes Sociais\n"
						+ "81 - Contatos\n"
						+ "Digite *0* para voltar ao menu anterior."
						,{ parse_mode: 'Markdown' }
					);
				}else{
					$.sendMessage(
						$.message.chat.firstName
						+ ", escolha uma das seguintes opções:\n\n"
						+ "1 - SEGOV\n"
						+ "2 - GOVERNO JUNTO DE VOCÊ\n"
						+ "3 - CARTÃO METROBUS\n"
						+ "4 - PASSE LIVRE ESTUDANTIL\n"
						+ "5 - JUVENTUDE\n"
						+ "6 - CONVÊNIOS\n"
						+ "7 - ADVOGADOS DATIVOS\n"
						+ "8 - FALE CONOSCO\n\n"
						+ "*SEU ID:* " + $.message.chat.id +"\n"
						,{ parse_mode: 'Markdown' }
					);
					console.log( res + "else");
				}
			break;

			default:
				$.sendMessage(
					"Olá "
					+ $.message.chat.firstName 
					+ ", tudo bem? Bem vindo ao sistema de atendimento eletrônico da Secretaria de Governo de Goiás -  *SEGOV*. É um prazer atendê-lo(a)."
					+ "Para agilizar o seu atendimento responda com o nº da opção desejada.\n\n"
					+ "Secretaria de Estado de Governo - *SEGOV* www.segov.go.gov.br\n\n"
					+ "1 - SEGOV\n"
					+ "2 - GOVERNO JUNTO DE VOCÊ\n"
					+ "3 - CARTÃO METROBUS\n"
					+ "4 - PASSE LIVRE ESTUDANTIL\n"
					+ "5 - JUVENTUDE\n"
					+ "6 - CONVÊNIOS\n"
					+ "7 - ADVOGADOS DATIVOS\n"
					+ "8 - FALE CONOSCO\n\n"
					+ "*SEU ID:* " + $.message.chat.id +"\n"
					,{ parse_mode: 'Markdown' }
				);
				console.log(r + "default");
		        
    	}
    }

}

module.exports = MenuController;

