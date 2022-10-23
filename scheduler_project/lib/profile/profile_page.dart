// ignore_for_file: prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            color: Color.fromARGB(255, 10, 189, 234),
            padding: EdgeInsets.only(left: 20, right: 20, top: 10),
            height: 250,
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
                      'Profile',
                      style: TextStyle(fontSize: 20, color: Colors.white),
                    ),
                  ],
                ),
                SizedBox(height: 10),
                Column(
                  children: [
                    CircleAvatar(
                      backgroundColor: Colors.white,
                      radius: 55,
                      backgroundImage: AssetImage('assets/images/profile.png'),
                    ),
                    SizedBox(height: 20),
                    Text(
                      ' Thai Bach Long',
                      style: TextStyle(fontSize: 22, color: Colors.white),
                    ),
                  ],
                ),
              ],
            ),
          ),
          Container(
            color: Colors.white,
            child: Column(
              children: [
                _builderTextField('Department', 'Software Engineering'),
                _builderTextField('Date Of Birth', '12/03/1983'),
                _builderTextField('Email', 'longDt12@fpt.edu.vn'),
                _builderTextField('Phone Number', '0324718963'),
              ],
            ),
          ),
          SizedBox(height: 10),
          Container(
            //margin: EdgeInsets.only(left: 10),
            alignment: Alignment.center,
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                primary: Color.fromARGB(255, 10, 189, 234),
              ),
              onPressed: () {},
              child: Text(
                'Edit Profile',
                style: TextStyle(fontSize: 20, color: Colors.white),
              ),
            ),
          )
        ],
      ),
    );
  }

  _builderTextField(String labelText, String placeholder) {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: TextField(
        obscureText: false,
        decoration: InputDecoration(
          contentPadding: EdgeInsets.only(bottom: 5),
          labelText: labelText,
          labelStyle: TextStyle(
              fontSize: 30, fontWeight: FontWeight.bold, color: Colors.black),
          floatingLabelBehavior: FloatingLabelBehavior.always,
          hintText: placeholder,
          hintStyle: TextStyle(
              fontSize: 20, fontWeight: FontWeight.bold, color: Colors.grey),
        ),
      ),
    );
  }
}
