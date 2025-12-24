package com.kingdom_hearts_ecommerce.service;

import com.kingdom_hearts_ecommerce.model.Product;
import com.kingdom_hearts_ecommerce.repository.ProductRepository;
import jakarta.persistence.NoResultException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    public List<Product> listProducts(){
        return productRepository.findAll();
    }

    public Product findById(Long id){
        return productRepository.findById(id)
                .orElseThrow(() -> new NoResultException("Product not found"));
    }

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public void deleteProduct(Long id){
        if(!productRepository.existsById(id)){
            throw new NoResultException("Product: " + id + " not founded.");
        }
        productRepository.deleteById(id);
    }
}
