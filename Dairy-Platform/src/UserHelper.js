import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const storeUser = (data) => {
    if (!data || !data.user || !data.user.email) {
        console.error("Missing user data in storeUser");
        return;
    }
    localStorage.setItem(
        "user",
        JSON.stringify({
            name: data.user.username,
            email: data.user.email,
            jwt: data.jwt,
        })
    );
};

export const userData = () => {
    const stringifiedUser = localStorage.getItem("user") || "{}";
    return JSON.parse(stringifiedUser);
};

export const Protector = ({ Component }) => {
    const navigate = useNavigate();

    const { jwt } = userData();

    useEffect(() => {
        if (!jwt) {
            navigate("/login");
        }
    }, [navigate, jwt]);

    return Component;
};