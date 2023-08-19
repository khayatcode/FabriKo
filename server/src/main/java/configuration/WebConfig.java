package configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
public class WebConfig {

	    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
	        configurer.defaultContentType(MediaType.APPLICATION_JSON);
	    }


	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/**")
	                .allowedOrigins("*")
	                .allowedMethods("GET", "POST", "PUT", "DELETE")
	                .allowedHeaders("*")
	                .exposedHeaders("Authorization")
	                .allowCredentials(true)
	                .maxAge(3600);
	    }
} 