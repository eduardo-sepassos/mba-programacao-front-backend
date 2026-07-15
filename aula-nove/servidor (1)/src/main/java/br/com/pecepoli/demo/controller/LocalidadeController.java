package br.com.pecepoli.demo.controller;


import br.com.pecepoli.demo.domain.Localidade;
import br.com.pecepoli.demo.service.LocalidadeService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Controller
public class LocalidadeController {

    private final LocalidadeService localidadeService;

    public LocalidadeController(LocalidadeService localidadeService) {
        this.localidadeService = localidadeService;
    }

    @RequestMapping(path = "/localidades")
    public ResponseEntity<List<Localidade>> getLocalidade(@RequestParam(required = false) String q, Pageable pageable) {
    Page<Localidade>localidades = this.localidadeService.obterLocalidades(q,pageable);
    return ResponseEntity.ok()
            .header("Access-Control-Allow-Headers", "*")
            .header("X-Total-Count", String.valueOf(localidades.getTotalElements()))
            .body(localidades.toList());


    }

    @RequestMapping(path = "/localidades/{id}")
    public ResponseEntity<Localidade> getLocalidade(@PathVariable UUID id) {
        Optional<Localidade> localidade = this.localidadeService.obterLocalidadeById(id);
        return localidade.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

    }
}
