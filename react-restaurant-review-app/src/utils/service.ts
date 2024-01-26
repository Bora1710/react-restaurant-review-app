const HOST = "http://localhost:8080/";

export async function post<B, R>(url: string, body: B): Promise<R | void> {
  try {
    const response = await fetch(`${HOST}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const res = await response.json();

    if (res.isSuccess) {
      return res.payLoad as R;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
