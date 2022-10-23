// ignore_for_file: prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import 'package:scheduler_project/profile/componets/text_field.dart';

class EditProfilePage extends StatelessWidget {
  const EditProfilePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              color: Color.fromARGB(255, 10, 189, 234),
              padding: EdgeInsets.only(left: 20, right: 20, top: 10),
              height: 200,
              width: double.infinity,
              child: Column(
                children: [
                  SizedBox(
                    height: 30,
                  ),
                  Row(
                    children: [
                      GestureDetector(
                        onTap: () {},
                        child: Icon(
                          Icons.arrow_back_outlined,
                          size: 30,
                          color: Colors.white,
                        ),
                      ),
                      SizedBox(width: 10),
                      Text(
                        'Edit Profile',
                        style: TextStyle(fontSize: 20, color: Colors.white),
                      ),
                    ],
                  ),
                  SizedBox(height: 10),
                  CircleAvatar(
                    backgroundColor: Colors.white,
                    radius: 50,
                    backgroundImage: AssetImage('assets/images/profile.png'),
                  ),
                ],
              ),
            ),
            SizedBox(height: 10),
            Container(
              padding: EdgeInsets.only(left: 20, right: 20),
              margin: EdgeInsets.only(bottom: 20),
              child: Column(
                //crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  TextFieldWidget(
                    label: "Full Name",
                    text: 'Thai Bach Long',
                    onChanged: (name) {},
                  ),
                  TextFieldWidget(
                    label: "Department",
                    text: 'Software Engineering',
                    onChanged: (name) {},
                  ),
                  TextFieldWidget(
                    label: "Email",
                    text: 'longDt12@fpt.edu.vn',
                    onChanged: (name) {},
                  ),
                  TextFieldWidget(
                    label: "Date Of Birth",
                    text: '12/03/1983',
                    onChanged: (name) {},
                  ),
                  TextFieldWidget(
                    label: "Phone",
                    text: '0324718963',
                    onChanged: (name) {},
                  ),
                ],
              ),
            ),
            Container(
              alignment: Alignment.center,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                    primary: Color.fromARGB(255, 10, 189, 234),
                    minimumSize: Size(100, 50)),
                onPressed: () {},
                child: Text(
                  'Save',
                  style: TextStyle(fontSize: 20, color: Colors.white),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
