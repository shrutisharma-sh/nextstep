package com.shruti.nextstep_backend.repository;


import com.shruti.nextstep_backend.model.CareerQuery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CareerQueryRepository
        extends JpaRepository<CareerQuery, Long> {
}