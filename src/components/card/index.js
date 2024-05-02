import React from "react";
import {
  Card as MUICard,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./styles.css";
import { JOB_ROLE_MAP } from "../../constants/job-role-mapping";

const Card = ({ item }) => {
  const {
    jdUid = "",
    jdLink = "https://weekday.works",
    jobDetailsFromCompany = "",
    maxJdSalary = "",
    minJdSalary = null,
    salaryCurrencyCode = "USD",
    location = "delhi ncr",
    minExp = 3,
    maxExp = 6,
    jobRole = "frontend",
  } = item || {};
  return (
    <MUICard key={jdUid} className="container" variant="rounded">
      <CardContent>
        <div className="badge-container"> {"\u231B"} Posted 10 days ago</div>
        <div className="hero-section">
          <img src="" alt="" className="company-image" />
          <div className="job-heading">
            <div>Title</div>
            <div>{JOB_ROLE_MAP[jobRole]}</div>
            <div>location</div>
          </div>
        </div>
        {!!(minJdSalary || maxJdSalary) && (
          <Typography variant="subtitle1" className="estimated-salary">
            Estimate Salary:
            {`  ${minJdSalary ? `${minJdSalary} - ` : ""}${maxJdSalary} LPA ✅`}
          </Typography>
        )}
        <h4>About Company</h4>
        <h4>About us</h4>
        <div className="faded">
          <Typography variant="body2" color="text.secondary">
            {jobDetailsFromCompany}
          </Typography>
        </div>
        {!!minExp && (
          <div className="min-exp">
            Minimum Experience
            <br />
            {minExp}
          </div>
        )}
      </CardContent>
    </MUICard>
  );
};

export default Card;
