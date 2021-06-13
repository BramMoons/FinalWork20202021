/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.finalworkapi.MODEL;

/**
 *
 * @author BramLaptop
 */
public class wandelingen {
    
     private int wandelingId;
    private String naam;
    private String lengte;
    private int startUur;
    private int stopUur;
    private String straat;
    private int straatNr;
    private int postcode;
    private String gemeente;
    private String datum;
    private float latitude;
    private float longitude;

    public int getWandelingId() {
        return wandelingId;
    }

    public void setWandelingId(int wandelingId) {
        this.wandelingId = wandelingId;
    }
    
    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    public String getLengte() {
        return lengte;
    }

    public void setLengte(String lengte) {
        this.lengte = lengte;
    }
    
    public int getStartUur() {
        return startUur;
    }
    
    public void setStartUur() {
        this.startUur = startUur;
    }
    
    public int getStopUur() {
        return stopUur;
    }
    
    public void setStopUur() {
        this.stopUur= stopUur;
    }

    public String getStraat() {
        return straat;
    }

    public void setStraat(String straat) {
        this.straat = straat;
    }

    public int getStraatNr() {
        return straatNr;
    }

    public void setStraatNr(int straatNr) {
        this.straatNr = straatNr;
    }

    public int getPostcode() {
        return postcode;
    }

    public void setPostcode(int postcode) {
        this.postcode = postcode;
    }

    public String getGemeente() {
        return gemeente;
    }

    public void setGemeente(String gemeente) {
        this.gemeente = gemeente;
    }
    
    public String getDatum() {
        return datum;
    }
    
    public void setDatum(String datum) {
        this.datum = datum;
    }

    public wandelingen(int wandelingId, String naam, String lengte, int startUur, int stopUur, String straat, int straatNr, int postcode, String gemeente, String datum, float latitude, float longitude) {
        this.wandelingId = wandelingId;
        this.naam = naam;
        this.lengte = lengte;
        this.straat = straat;
        this.straatNr = straatNr;
        this.postcode = postcode;
        this.gemeente = gemeente;
        this.datum = datum;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public wandelingen() {
    }
    
}
