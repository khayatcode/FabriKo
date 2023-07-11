package com.groupproject.tshirtpalooza.serializer;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.groupproject.tshirtpalooza.models.Cart;

public class CartSerializer extends JsonSerializer<Cart> {
	@Override
    public void serialize(Cart cart, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeNumberField("id", cart.getId());
        jsonGenerator.writeNumberField("quantity", cart.getQuantity());
        jsonGenerator.writeStringField("size", cart.getSize());
        jsonGenerator.writeNumberField("total", cart.getTotal());
        jsonGenerator.writeBooleanField("complete", cart.getComplete());
        jsonGenerator.writeObjectField("product", cart.getProduct());
        jsonGenerator.writeObjectField("user", cart.getUser());
        jsonGenerator.writeEndObject();
    }

}
