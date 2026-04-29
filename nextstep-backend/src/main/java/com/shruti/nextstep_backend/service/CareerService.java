package com.shruti.nextstep_backend.service;

import com.shruti.nextstep_backend.dto.AIResponse;
import com.shruti.nextstep_backend.dto.CareerRequest;
import com.shruti.nextstep_backend.model.CareerQuery;
import com.shruti.nextstep_backend.repository.CareerQueryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class CareerService {
    private final CareerQueryRepository repository;
    private final RestTemplate restTemplate;

    public AIResponse processCareerQuery(CareerRequest request) {

        String aiServiceUrl = "http://localhost:8000/analyze";

        AIResponse aiResponse = restTemplate.postForObject(
                aiServiceUrl,
                request,
                AIResponse.class
        );

        CareerQuery query = new CareerQuery();

        query.setUserInput(request.getQuery());

        query.setDetectedEmotion(aiResponse.getEmotion());

        repository.save(query);

        return aiResponse;
    }


}
