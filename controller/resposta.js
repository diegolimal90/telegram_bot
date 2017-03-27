'use strict';

const Telegram = require('telegram-node-bot');

class RespostaController extends Telegram.TelegramBaseController{
	r1Handler($){
		$.sendMessage(
					"*A Secretaria*\n"
					+ "A Secretaria de Governo (Segov) estreita laços entre o Governo de Goiás e a sociedade,\n\n" 
					+ "estimulando o bom relacionamento com líderes políticos, comunitários, classistas,\n\n" 
					+ "municipalistas e com a população em geral.\n"
					+ "Acesse o site da Segov: goo.gl/nMjVDs\n"
					+ "Competências da Secretaria: goo.gl/VHT27i\n"
					,{ parse_mode: 'Markdown' }
					);
	}

	r2Handler($){
		$.sendMessage(
					"*Consultar Processos*\n"
					+ "A Secretaria Geral da Segov – Protocolo : 3201 5625\n"
					+ "Acesse: goo.gl/MqfVt\n"
					,{ parse_mode: 'Markdown' }
					);
	}

	r3Handler($){
		$.sendMessage(
					"*Contatos*\n"
					+ "*-* Secretário: Tayrone Di Martino – 3201 5601 / 3201 5602"
					+ "*-* Superintendente Executivo: Nelson Henrique – 3201 5622"
					+ "*-* Chefe de Gabinete: Vera Quixabeira – 3201 5601/ 3201 5602"
					+ "*-* Sup. de Gestão, Planej. e Finanças: Valfran de Sousa Riberio – 3201 5637"
					+ "*-* Sup. da Juventude: Leonardo Felipe Marques – 3201 5646"
					+ "*-* Sup. de Articulação Política e Apoio Municipal: Corivaldo de Freitas - 3201 5694"
					+ "*-* Chefe da Advocacia Setorial: Ana Paula Lima Florentino Alves Ferreira – 3201 5605"
					+ "*-* Chefe da Comunicação Setorial: José Leopoldo de Veiga Jardim – 3201 5614"
					+ "*-* E-mail: chefiagab.segov@gmail.com"
					,{ parse_mode: 'Markdown' }
					);
	}

	get routes(){
		return{
			'r1Command':'r1Handler',
			'r2Command':'r2Handler',
			'r3Command':'r3Handler'
		};
	}
}

module.exports = RespostaController;