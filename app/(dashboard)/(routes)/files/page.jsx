"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app, db } from "../../../firebase/config";
import { Trash2 } from "lucide-react";
import { deleteObject, getStorage, ref } from "firebase/storage";
import toast from "react-hot-toast";

export default function page() {
  const storage = getStorage(app);
  const { isSignedIn, user, isLoaded } = useUser();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getFiles = async () => {
      if (!isLoaded) {
        // Handle loading state however you like
        return null;
      }

      if (isSignedIn) {
        console.log("Username:" + user.primaryEmailAddress.emailAddress);
      }
      const querySnapshot = await getDocs(collection(db, "uploadedFile"));
      const files = [];
      querySnapshot.forEach((doc) => {
        if (
          user &&
          doc.data().userEmail === user.primaryEmailAddress.emailAddress
        ) {
          console.log(doc.data());
          files.push({ ...doc.data(), id: doc.id });
        }
      });
      setFiles(files);
    };
    getFiles();
  }, [isLoaded, isSignedIn, user]);

  const onDeleteFile = (file) => async () => {
    try {
      const storageRef = ref(storage, "files-upload/" + file.fileName);
      deleteObject(storageRef)
        .then(() => {
          console.log("file deleted successfully");
        })
        .catch((error) => {
          console.log(error);
        });
      await deleteDoc(doc(db, "uploadedFile", file.id));
      toast.success("File deleted successfully");
      setFiles((prevFiles) => prevFiles.filter((f) => f.id !== file.id));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <div className="bg-gray-900 h-screen p-5">
      <div className="overflow-x-auto">
        <div>
          <h2 className="text-white text-xl uppercase">My Files</h2>
          <div className="p-5 text-lg flex justify-between bg-gray-500/10 m-2 rounded-lg">
            <h2 className="text-gray-400">Total Files:</h2>
            <span className="text-gray-400">{files.length}</span>
          </div>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase  bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    File Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Size
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {files.map((file) => (
                  <tr
                    key={file.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {file.fileName}
                    </td>
                    <td className="px-6 py-4">{file.fileType}</td>
                    <td className="px-6 py-4">
                      {(file.fileSize / 1024 / 1024).toFixed(2)}MB
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={`/file-preview/${file.id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <Trash2
                        className="text-red-500 cursor-pointer"
                        onClick={onDeleteFile(file)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <UserButton /> */}
    </div>
  );
}
