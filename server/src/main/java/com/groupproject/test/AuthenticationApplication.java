package com.groupproject.tshirtpalooza;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;


@SpringBootApplication
public class AuthenticationApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthenticationApplication.class, args);
	}
	
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
	
//	@Bean
//	public MultipartConfigElement multipartConfigElement() {
//	    MultipartConfigFactory factory = new MultipartConfigFactory();
//	    factory.setMaxFileSize(DataSize.ofMegabytes(5));
//	    factory.setMaxRequestSize(DataSize.ofMegabytes(5));
//	    return factory.createMultipartConfig();
//	}

}
