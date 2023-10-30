// CACHE TOOLS JS
////////////////////////////////////////////////

// AFFICHE EN CONSOLE LA TAILLE DU RETOUR API :
	export function RespSize(response) {
		const encoder = new TextEncoder();
		const encodedResponse = encoder.encode(response);
		console.log('API Resp Size in Bytes: ' + encodedResponse.length + ' octets');
	}
	
////////////////////////////////////////////////
