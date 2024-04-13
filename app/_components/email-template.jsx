import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const EmailTemplate = ({ response }) => (
  <Html>
    <Head />
    <Preview>Sharedom!!</Preview>
    <Body style={main}>
      <Container>
        {/* <Section style={logo}>
          <Img
            src={
              " https://firebasestorage.googleapis.com/v0/b/share-dom.appspot.com/o/files-upload%2FSharedom.png?alt=media&token=f5077ffe-f6e8-4acd-8f74-ec4cee6b4001"
            }
          />
        </Section> */}

        <Section style={content}>
          <Row>
            <Img
              style={image}
              width={800}
              src={
                " https://firebasestorage.googleapis.com/v0/b/share-dom.appspot.com/o/files-upload%2FSharedom.png?alt=media&token=452a9d5b-cee1-41ef-b442-c98f5f3f2ce0"
              }
            />
          </Row>

          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hi {response?.emailToSend.split("@")[0]},
              </Heading>
              <Heading
                as="h2"
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {response?.userName} shared a file with you.
              </Heading>

              <Text style={paragraph}>
                <b>File Name: {response.fileName}</b>
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>File Type: {response.fileType} </b>
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>
                  File Size: {response.fileSize}
                  MB
                </b>
              </Text>
              <Text
                style={{
                  color: "rgb(0,0,0, 0.5)",
                  fontSize: 14,
                  marginTop: -5,
                }}
              >
                {/* *Approximate geographic location based on IP address: */}
              </Text>

              <Text style={paragraph}>
                Enter the password and get access to the file
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                Click the below button below to download the file
              </Text>
            </Column>
          </Row>
          <Row style={{ ...boxInfos, paddingTop: "0" }}>
            <Column style={containerButton} colSpan={2}>
              <Button style={button} href={response.fileShortUrl}>
                Download File
              </Button>
            </Column>
          </Row>
        </Section>

        <Section style={containerImageFooter}>
          <Img
            style={image}
            width={620}
            src={
              "https://firebasestorage.googleapis.com/v0/b/share-dom.appspot.com/o/files-upload%2FSharedom.png?alt=media&token=452a9d5b-cee1-41ef-b442-c98f5f3f2ce0"
            }
          />
        </Section>

        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgb(0,0,0, 0.7)",
          }}
        >
          © 2024 | Sharedom Copyrights India | www.sharedom.com
        </Text>
      </Container>
    </Body>
  </Html>
);
const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "10px 10px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
  textAlign: "center",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
  // pointer-events: none,
  PointerEvents: "none",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
