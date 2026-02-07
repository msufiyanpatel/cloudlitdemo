import * as React from "react";
import styles from "../styles/Services.module.css";
import awsIcon from "../assets/aws-icon.png";
import azureIcon from "../assets/Azure-Logo-PNG-Black.png";
import gcp from "../assets/google-cloud-platform.png";
import docker from "../assets/docker-logo.png";
import dockerCompose from "../assets/docker compose.jpg"
import kubernetes from "../assets/kubernetes.png"
import gitlab from "../assets/Gitlab.png";
import github from "../assets/GitHub.png"
import teamcity from "../assets/TeamCity.png"
import ansible from "../assets/ansible.png";
import chef from "../assets/chef.png"
import puppet from "../assets/puppet.png"
import mysql from "../assets/mysql.png"
import postgresql from "../assets/Postgresql_elephant.svg.png"
import oracle from "../assets/oracle.png"
import rabbitMQ from "../assets/rabbitmq.png"
import kafka from "../assets/kafka.png"
import reddis from "../assets/reddid.png"
import Promethus from "../assets/promoetheus.png"
import datadog from "../assets/datadog.png"
import pagerduty from "../assets/pagerduty.png"
import Terraform from "../assets/terraform.png"
import pulumi from "../assets/pulumi.svg"
import cloudFormation from "../assets/aws-cloudformation.png"

const Services = () => {
  const isMobile = window.innerWidth <= 766; // Adjust the breakpoint as needed
  return (
    <><head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head><div id="services">
        <div className={styles.Services}>
          <div className={styles["content-container"]}>
            <h1 className={styles["headingOne"]}>
              Tools and Technologies We Use
            </h1>
            <p className={styles["contentOne"]}>
              Let us help you optimize your business success with an arsenal of
              well-proven tools and technologies.
            </p>
          </div>
          <div className={styles.container}>
            {/* First box */}
            <div className={styles.box}>
              <div className={styles.boxContent}>
                <h1 className={styles.headingTwo}>Cloud Providers</h1>
                <p className={styles.contentTwo}>
                  Amazon AWS, GCP, Microsoft Azure, Any PrivateCloud and other...
                </p>
                <div className={styles.boxContainer}>
                  <div className={styles.smallBox}>
                    <img src={awsIcon} alt="AWS Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={azureIcon} alt="Azure Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={gcp} alt="GCP Icon" />
                  </div>
                </div>
              </div>
            </div>
            {/* Second box */}
            <div className={styles.box}>
              <div className={styles.boxContent}>
                <h1 className={styles.headingTwo}>Containers & Orchestration</h1>
                <p className={styles.contentTwo}>
                  Docker, Compose, Kubernetes and other...
                </p>
                <div className={styles.boxContainer}>
                  <div className={styles.smallBox}>
                    <img src={docker} alt="Docker Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={dockerCompose} alt="Docker Compose Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={kubernetes} alt="Kubernetes Icon" />
                  </div>
                </div>
              </div>
            </div>
            {/* Third box */}
            <div className={styles.box}>
              <div className={styles.boxContent}>
                <h1 className={styles.headingTwo}>CI/CD</h1>
                <p className={styles.contentTwo}>
                  Jenkins, GitLab, GitHub, Teamcity, CircleCI, Travis CI,
                  Bitbucket pipelines, DroneCI, Flux, ArgoCD and other..
                </p>
                <div className={styles.boxContainer}>
                  <div className={styles.smallBox}>
                    <img src={gitlab} alt="GitLab Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={github} alt="GitHub Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={teamcity} alt="Team City Icon" />
                  </div>
                </div>
              </div>
            </div>
            {/* Fourth box */}
            <div className={styles.box}>
              <div className={styles.boxContent}>
                <h1 className={styles.headingTwo}>Configuration management</h1>
                <p className={styles.contentTwo}>
                  Ansible, Chef, puppet and other...
                </p>
                <div className={styles.boxContainer}>
                  <div className={styles.smallBox}>
                    <img src={ansible} alt="Ansible Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={chef} alt="Chef Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={puppet} alt="Puppet Icon" />
                  </div>
                </div>
              </div>
            </div>
            {/* Fifth box */}
            <div className={styles.box}>
              <div className={styles.boxContent}>
                <h1 className={styles.headingTwo}>Databases</h1>
                <p className={styles.contentTwo}>
                  MySql, MongoDB, Amazon Aurora, PostgresSQL, Percona, Scylla DB,
                  Clickhouse MariaDB, Oracle, MS SQL, InnoDB and other...
                </p>
                <div className={styles.boxContainer}>
                  <div className={styles.smallBox}>
                    <img src={mysql} alt="mySql Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={postgresql} alt="PostGre Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={oracle} alt="Oracle Icon" />
                  </div>
                </div>
              </div>
            </div>
            {/* Sixth box */}
            <div className={styles.box}>
              <div className={styles.boxContent}>
                <h1 className={styles.headingTwo}>Service</h1>
                <p className={styles.contentTwo}>
                  RabbitMQ, Apache Kafka, Apache Cassandra, Redis, ELK stack,
                  Istio, MinIO, Memcached, Kiali and other...
                </p>
                <div className={styles.boxContainer}>
                  <div className={styles.smallBox}>
                    <img src={rabbitMQ} alt="rabbitMQ Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={kafka} alt="Apache Kafka Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={reddis} alt="Reddis Icon" />
                  </div>
                </div>
              </div>
            </div>
            {/* Seventh box */}
            <div className={styles.box}>
              <div className={styles.boxContent}>
                <h1 className={styles.headingTwo}>Monitoring</h1>
                <p className={styles.contentTwo}>
                  Promethus, Datadog, Sentry, Grafana, PagerDuty, InfluxDB, Azure
                  Monitor, Google Stackdriver, Amazon Cloudwatch and other...
                </p>
                <div className={styles.boxContainer}>
                  <div className={styles.smallBox}>
                    <img src={Promethus} alt="Promotheus Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={datadog} alt="Datadog Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={pagerduty} alt="Pagerduty Icon" />
                  </div>
                </div>
              </div>
            </div>
            {/* Eigth box */}
            <div className={styles.box}>
              <div className={styles.boxContent}>
                <h1 className={styles.headingTwo}>Infrastructure provisioning</h1>
                <p className={styles.contentTwo}>
                  Terraform, Pulumi, AWS CloudFormation and other...
                </p>
                <div className={styles.boxContainer}>
                  <div className={styles.smallBox}>
                    <img src={Terraform} alt="Terraform Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={pulumi} alt="Pulumi Icon" />
                  </div>
                  <div className={styles.smallBox}>
                    <img src={cloudFormation} alt="Cloud Formation Icon" />
                  </div>
                </div>
                {/* box-container */}
              </div>
              {/* box-content */}
            </div>
            {/* box */}
          </div>
          {/* container */}
          {/*Services */}
        </div>
      </div></>
  );
};

export default Services;
//  
