package com.shruti.nextstep_backend.controller;

import com.shruti.nextstep_backend.dto.AIResponse;
import com.shruti.nextstep_backend.dto.CareerRequest;
import com.shruti.nextstep_backend.model.CareerQuery;
import com.shruti.nextstep_backend.service.CareerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/career")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CareerController {

    private final CareerService service;

    @PostMapping("/ask")
    public AIResponse askCareerQuestion(
            @RequestBody CareerRequest request) {

        return service.processCareerQuery(request);
    }

}
