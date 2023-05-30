import AWS from "aws-sdk";

export const awsconfig = {
  bucketName: "skp-resource-center",
  region: "ap-northeast-2",
  accessKeyId: "AKIAX2FJEHXUP7KH4E3I",
  secretAccessKey: "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",
};

export const s3 = new AWS.S3({
  region: awsconfig.region,
  credentials: {
    accessKeyId: awsconfig.accessKeyId,
    secretAccessKey: awsconfig.secretAccessKey,
  },
});
