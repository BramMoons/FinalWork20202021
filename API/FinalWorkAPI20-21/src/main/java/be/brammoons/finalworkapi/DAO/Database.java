/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.finalworkapi.DAO;

import java.sql.*;
import java.util.ArrayList;

import javax.sql.rowset.CachedRowSet;
import javax.sql.rowset.RowSetProvider;

/**
 *
 * @author BramLaptop
 */
class Database {
    
    private static String locatieMySqlServer = "jdbc:mysql://dt5.ehb.be:3306/2021_FW_BRAMMOONS";
    private static String gebruikersnaam = "2021_FW_BRAMMOONS";
    private static String wachtwoord = "8bUtopT6";
    
    private static Connection getMijnConnectie() throws SQLException {
        Connection mijnConnectie = null;
        
	try {
            mijnConnectie = DriverManager.getConnection(locatieMySqlServer, gebruikersnaam, wachtwoord);
	} catch (SQLException ex) {
            System.out.println("Connectie kon niet worden opgebouwd. Zijn logingegevens correct?");
            throw ex;
	}
        
	return mijnConnectie;
    }
    
    public static PreparedStatement maakPreparedStatement(Connection mijnConnectie, String sqlQuery, Object[] parameterWaarden) throws SQLException {
        PreparedStatement mijnPreparedStatement = mijnConnectie.prepareStatement(sqlQuery);
        
        int parameterIndex = 1;
        
        for (Object parameterWaarde : parameterWaarden) {
            mijnPreparedStatement.setObject(parameterIndex, parameterWaarde);
            parameterIndex++;
        }
        
        return mijnPreparedStatement;
    }
    
    public static ResultSet voerSqlUitEnHaalResultaatOp(String sqlQuery) throws SQLException {
        return voerSqlUitEnHaalResultaatOp(sqlQuery, new Object[0]);
    }
    
    public static ResultSet voerSqlUitEnHaalResultaatOp(String sqlQuery, Object[] parameterWaarden) throws SQLException {
        Connection mijnConnectie = null;
        CachedRowSet mijnCachedRowSet = null;
        
        try {
            mijnConnectie = getMijnConnectie();
            PreparedStatement mijnPreparedStatement = maakPreparedStatement(mijnConnectie, sqlQuery, parameterWaarden);
            
            ResultSet mijnResultset = mijnPreparedStatement.executeQuery();
            mijnCachedRowSet = RowSetProvider.newFactory().createCachedRowSet();
            mijnCachedRowSet.populate(mijnResultset);
            
        } catch (SQLException ex) {
            ex.printStackTrace();
            throw ex;
        } finally {
            if (mijnConnectie != null) {
                mijnConnectie.close();
            }
        }
        
        return mijnCachedRowSet;
    }
    
    public static int voerSqlUitEnHaalAantalAangepasteRijenOp(String sqlQuery, Object[] parameterWaarden) throws SQLException {
        Connection mijnConnectie = null;
        int aantalAangepasteRijen = 0;
        
        try {
            mijnConnectie = getMijnConnectie();
            PreparedStatement mijnPreparedStatement = maakPreparedStatement(mijnConnectie, sqlQuery, parameterWaarden);
            
            aantalAangepasteRijen = mijnPreparedStatement.executeUpdate();
            
        } catch (SQLException ex) {
            ex.printStackTrace();
            throw ex;
        } finally   {
            if (mijnConnectie != null){
                mijnConnectie.close();
            }
        }
        
        return aantalAangepasteRijen;
    }
    
}
