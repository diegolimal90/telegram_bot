'use strict';

const Telegram = require('telegram-node-bot');

class SubmenuController extends Telegram.TelegramBaseController{
	op1Handler($){
		$.sendMessage(
			"10 - A Secretaria\n"
			+ "11 - Consultar Processos\n"
			+ "12 - Contatos"
			,{ parse_mode: 'Markdown' }
		);
	}

	op2Handler($){
		$.sendMessage(
					"20- O que é ?\n"
					+ "21- Serviços\n"
					+ "22- Próxima Edição\n"
					+ "23- Números Atualizados\n"
					+ "24- Contatos"
					);
	}

	op3Handler($){
		$.sendMessage(
					"Cartão Metrobus\n\n"
					+ "Benefício que concede desconto de 50% na tarifa aos usuários do Sistema Metropolitano\n\n"
					+ "Anhanguera – SMA, que compreende, além do Eixo Anhanguera e suas extensões, também as\n\n" 
					+ "Linhas Alimentadoras nele integradas. A Segov já realizou o cadastro de 54.828 beneficiados.\n" 
					+ "Saiba mais: http://www.juventude.go.gov.br/cartão-metrobus/dúvidas-faq-cart%C3%A3o-metrobus"
					);
	}

	op4Handler($){
		$.sendMessage(
					"40 - O que é?\n"
					+ "41 - Cadastro/Recadastro"
					);
	}

	op5Handler($){
		$.sendMessage(
					"50- O que fazemos?\n"
					+ "51- Passe Livre Estudantil\n"
					+ "52- Estágios\n"
					+ "53- Cartão Metrobus\n"
					+ "54- Goiás Sem Fronteiras\n"
					+ "55- Escola de Líderes\n"
					+ "56- Contatos\n"
					);
	}

	op6Handler($){
		$.sendMessage("Estamos Ataualizando nossos sistemas!");
	}

	op7Handler($){
		$.sendMessage("70 - O que é?\n"
					+ "71- Valor da UHD\n"
					+ "72- Contatos\n"
					);
	}

	op8Handler($){
		$.sendMessage(
					"80 - Redes Sociais\n"
					+ "81 - Contatos\n");
	}

	get routes(){
		return{
			'op1Command':'op1Handler',
			'op2Command':'op2Handler',
			'op3Command':'op3Handler',
			'op4Command':'op4Handler',
			'op5Command':'op5Handler',
			'op6Command':'op6Handler',
			'op7Command':'op7Handler',
			'op8Command':'op8Handler'
		};
	}
}

module.exports = SubmenuController;