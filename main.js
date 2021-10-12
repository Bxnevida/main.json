package  br.com.json ;

public  class  Carro {
	 ID longa privada ;
	private  String modelo;
	 placa de string privada ;

	public  Long  getId () {
		return id;
	}
	public  void  setId ( Long  id ) {
		isso . id = id;
	}
	public  String  getModelo () {
		return modelo;
	}
	public  void  setModelo ( String  modelo ) {
		isso . modelo = modelo;
	}
	public  String  getPlaca () {
		return placa;
	}
	public  void  setPlaca ( String  placa ) {
		isso . placa = placa;
	}

        // Aqui anunciar o Substituir do método toString () para visualizar a impressão com o System.out.println ()
	@Sobrepor
	public  String  toString () {
		return  " [id = "  + id +  " , modelo = "  + modelo +  " , placa = "  + placa
				+  " ] " ;
	}

}


package  br.com.json ;

import  org.json.JSONArray ;
import  org.json.JSONException ;
import  org.json.JSONObject ;

 classe  pública EstudoJSON {

	public  static  void  main ( String [] args ) lança  JSONException {
		adicaoSimplesDeDados ();
		
		adicaoDeUmObjeto ();
	}

	private  static  void  adicaoSimplesDeDados () throws  JSONException {
                // Criação do objeto e educação dos valores
		Carro carro =  Carro novo  ();
		carro . setId ( 1l );
		carro . setModelo ( " Celta " );
		carro . setPlaca ( " AAA1234 " );
	
                // Criação do objeto carroJson
		JSONObject carroJson =  novo  JSONObject ();

                // Inserção dos valores do carro no objeto JSON
		carroJson . put ( " id " , carro . getId ());
		carroJson . put ( " Modelo " , carro . getModelo ());
		carroJson . put ( " Placa " , carro . getPlaca ());
	
                // Impressão do objeto JSON
		Sistema . para fora . println (carroJson);
                Sistema . para fora . println (carroJson . get ( " Modelo " ));
	}
	
	private  static  void  adicaoDeUmObjeto () throws  JSONException {
		Carro carro =  Carro novo  ();
		carro . setId ( 1l );
		carro . setModelo ( " Celta " );
		carro . setPlaca ( " AAA1234 " );
		
		JSONObject carroJson =  novo  JSONObject ();

                // Adição do objeto carro
		carroJson . put ( " Carro " , carro);
		
		Sistema . para fora . println (carroJson);
	}
	
}
