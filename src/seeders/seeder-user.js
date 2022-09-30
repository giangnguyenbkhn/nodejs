"use strict";

module.exports = {
    // up chạy dữ liệu vào khi hoạt động bình thường
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", [{
            email: "admin@gmail.com",
            password: "123456",
            firstName: "Nguyen",
            lastName: "Giang",
            address: "Ha Noi",
            gender: "1",
            typeRole: "ROLE",
            keyRole: "R1",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, ]);
    },
    // down cancel việc thêm dữ liệu khi bị lỗi
    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {});
    },
};
// file chứa dữ liệu mẫu seeders