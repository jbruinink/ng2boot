package com.jdriven.ng2boot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api/")
public class ApiController {

    @RequestMapping("data")
    public Data getData() {
        Data data = new Data();
        data.setName("A name");
        data.setDescription("A description");
        return data;
    }
}
