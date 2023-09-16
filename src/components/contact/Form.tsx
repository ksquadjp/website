import { CONTACT_POST_URL } from "@config";

import { useState } from "preact/hooks";

interface Props {
  label: string;
  field: string;
  contentType?: string;
  onInput: (value: string) => void;
}

function TextForm(props: Props) {
  return (
    <p class="p-3">
      <label class="mb-2 block p-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.label}
        <input
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          name={props.field}
          type={props.contentType}
          onInput={(e: any) => props.onInput(e.target.value)}
        ></input>
      </label>
    </p>
  );
}

function TextAreaForm(props: Props) {
  return (
    <p class="p-3">
      <label class="mb-2 block p-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.label}
        <textarea
          rows={7}
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          name={props.field}
          onInput={(e: any) => props.onInput(e.target.value)}
        ></textarea>
      </label>
    </p>
  );
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [via, setVia] = useState("");
  const [content, setContent] = useState("");

  if (done) {
    return (
      <div className="p-3">
        <p>お問い合わせいただきありがとうございました。</p>
        <p>内容を確認した上で担当者よりご連絡させていただきます。</p>
      </div>
    );
  }

  return (
    <div class="p-5 md:px-16 lg:px-48">
      <TextForm label="お名前" field="name" onInput={setName} />
      <TextForm label="メールアドレス" field="email" contentType="email" onInput={setEmail} />
      <TextForm label="どこでK Squadを知ったか" field="via" onInput={setVia} />
      <TextAreaForm label="内容" field="content" onInput={setContent} />
      <div class="flex justify-center">
        <button
          className="border bg-black px-4 py-2 font-bold text-white hover:border-black hover:bg-white hover:text-black"
          onClick={
            !loading
              ? (_) => {
                  setLoading(true);
                  const formData = new FormData();
                  formData.append("name", name);
                  formData.append("email", email);
                  formData.append("via", via);
                  formData.append("content", content);
                  fetch(CONTACT_POST_URL, {
                    method: "POST",
                    body: formData,
                    mode: "cors",
                  }).then((_) => setDone(true));
                }
              : (_) => {}
          }
        >
          {loading && "送信中..."}
          {!loading && "送信"}
        </button>
      </div>
    </div>
  );
}
