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
public class asiel {
    
    private int asielId;
    private String naam;
    private String dieren;
    private String straat;
    private int straatNr;
    private int postcode;
    private String gemeente;
    private String photoPath;
    private float latitude;
    private float longitude;

    public int getAsielId() {
        return asielId;
    }

    public void setAsielId(int asielId) {
        this.asielId = asielId;
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

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public String getDieren() {
        return dieren;
    }

    public void setDieren(String dieren) {
        this.dieren = dieren;
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
    
    public String getPhotoPath() {
        return photoPath;
    }
    
    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public asiel(int asielId, String naam, String dieren, String straat, int straatNr, int postcode, String gemeente, String photoPath, float latitude, float longitude) {
        this.asielId = asielId;
        this.naam = naam;
        this.dieren = dieren;
        this.straat = straat;
        this.straatNr = straatNr;
        this.postcode = postcode;
        this.gemeente = gemeente;
        this.photoPath = photoPath;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public asiel() {
    
    }
    
}
