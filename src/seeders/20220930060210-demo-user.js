"use strict";

module.exports = {
    // up chạy dữ liệu vào khi hoạt động bình thường
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", [{
            firstName: "John",
            lastName: "Doe",
            email: "example@example.com",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, ]);
    },
    // down cancel việc thêm dữ liệu khi bị lỗi
    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {});
    },
};