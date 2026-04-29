package com.shruti.nextstep_backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class AIResponse {
    private String emotion;

    private List<String> roadmap;

    private List<String> skills;
}
