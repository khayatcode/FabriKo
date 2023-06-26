package com.groupproject.tshirtpalooza.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.groupproject.tshirtpalooza.models.Message;
import com.groupproject.tshirtpalooza.services.MessageService;
import jakarta.validation.Valid;

@CrossOrigin(origins = "http//localhost:3000")
@RestController
public class MessageController {

	@Autowired
	private MessageService messageServ;

	@GetMapping("/message")
	public ResponseEntity<List<Message>> items() {

		return ResponseEntity.status(200).body(this.messageServ.all());
	}

	@GetMapping("/message/{id}")
	public ResponseEntity<Message> getOneById(@PathVariable Long id) {

		return ResponseEntity.status(200).body(this.messageServ.getOne(id));
	}

	@PostMapping("/message/add")
	public ResponseEntity<Message> add(@Valid @RequestBody Message message) {

		Message savedProduct = messageServ.create(message);

		return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);

	}

	@PostMapping("/message/update")
	public ResponseEntity<Message> update(@Valid @RequestBody Message message) {

		Message savedProduct = messageServ.update(message);

		return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
	}

	@GetMapping("/message/delete/{id}")
	public ResponseEntity<Message> delete(@PathVariable Long id) {

		this.messageServ.delete(id);

		return ResponseEntity.status(200).body(null);

	}

}
