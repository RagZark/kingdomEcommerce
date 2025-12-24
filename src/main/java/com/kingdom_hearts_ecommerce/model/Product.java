package com.kingdom_hearts_ecommerce.model;

import jakarta.persistence.*;

import javax.naming.directory.InvalidAttributeValueException;

@Entity
@Table(name = "products")

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double price;
    private int quantity;
    private boolean inStock;

    public Product(){}

    public Product(String name, double price, int quantity) throws InvalidAttributeValueException {
        this.name = name;
        this.price = priceValidation(price);
        this.quantity = quantityValidation(quantity);
        this.inStock = availableStock(quantity);
    }

    private boolean availableStock(int quantity){
        if (quantity == 0){
            return this.inStock = false;
        }
        return this.inStock = true;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    private double priceValidation(double price) throws InvalidAttributeValueException {
        if(price < 0){
            throw new InvalidAttributeValueException("This price: " + price + " is invalid.");
        }
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    private int quantityValidation(int quantity) throws InvalidAttributeValueException {
        if (quantity < 0 ){
            throw new InvalidAttributeValueException("Quantity: " + quantity + " is not valid.");
        }
        return quantity;
    }

    public Long getId() {
        return id;
    }
}
